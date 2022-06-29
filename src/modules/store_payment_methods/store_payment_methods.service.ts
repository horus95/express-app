import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { processPaymentDto } from './dto/processPayment.dto';
import { StorePaymentMethodsEntity } from './store_payment_methods.entity';
import { StoreSubscriptionsEntity } from '../store_subscriptions/store_subscriptions.entity';
import { StorePaymentsHistoryEntity } from '../store_payments_history/store_payments_history.entity';
import { StorePaymentsErrorsEntity } from '../store_payments_errors/store_payments_errors.entity';
import { StoreSubscriptionsService } from '../store_subscriptions/store_subscriptions.service';
import { StorePaymentsHistoryService } from '../store_payments_history/store_payments_history.service';
import { StorePaymentsErrorsService } from '../store_payments_errors/store_payments_errors.service';
import * as soap from 'soap';
import * as moment from 'moment';

@Injectable()
export class StorePaymentMethodsService {
  WSDURL: string;
  args: any;
  constructor(
    private StoreSubscriptionsService: StoreSubscriptionsService,
    private StorePaymentsHistoryService: StorePaymentsHistoryService,
    private StorePaymentsErrorsService: StorePaymentsErrorsService,
  ) {
    this.WSDURL =
      'http://tokenV2.test.merchantprocess.net/TokenWebService.asmx?WSDL';

    this.args = {
      APIKey: '*NWIDEAS*2020v1.0',
      accessCode: '123123',
      merchantAccountNumber: '108075',
      terminalName: '108075001',
      clientTracking: 'SUSCRIPCION_BEE',
      currencyCode: '840',
    };
  }

  @InjectRepository(StorePaymentMethodsEntity)
  private readonly repository: Repository<StorePaymentMethodsEntity>;

  private async runTransaction(accountToken: string, amount: number) {
    return new Promise<any>((resolve, reject) => {
      soap.createClient(this.WSDURL, {}, (err, client) => {
        if (err) {
          console.log('ERR');
          reject(err);
        }
        client.Rebill(
          { ...this.args, accountToken, amount },
          function (err: Error, result: any) {
            resolve(result.RebillResult);
            return result;
          },
        );
      });
    });
  }

  public async create(
    payment: StorePaymentMethodsEntity,
  ): Promise<StorePaymentMethodsEntity> {
    return this.repository.save(payment);
  }

  public async processPayment(payment: processPaymentDto): Promise<any> {
    const {
      store_id,
      card_token,
      card_number,
      card_holdername,
      account_number,
      payed_amount,
      accountToken,
    } = payment;

    const result = await this.runTransaction(accountToken, payed_amount);
    const transaction_code = result.Code;
    const { TransactionId, AuthorizationNumber, ProcessorId, Description } =
      result;

    //StoreSubscription
    let newStoreSubscription: StoreSubscriptionsEntity =
      new StoreSubscriptionsEntity();
    newStoreSubscription.store_id = store_id;

    //StorePaymentMethod
    let newStorePaymentMethod: StorePaymentMethodsEntity =
      new StorePaymentMethodsEntity();
    newStorePaymentMethod.store_id = store_id;
    newStorePaymentMethod.card_token = card_token;
    newStorePaymentMethod.card_number = card_number;
    newStorePaymentMethod.card_name = card_holdername;
    newStorePaymentMethod.account_number = account_number;
    newStorePaymentMethod.current_payment_method = 1;

    let newStorePaymentsHistory: StorePaymentsHistoryEntity =
      new StorePaymentsHistoryEntity();
    newStorePaymentsHistory.payed_amount = payed_amount;
    newStorePaymentsHistory.payment_date = new Date();
    newStorePaymentsHistory.processor_id = ProcessorId;
    newStorePaymentsHistory.transaction_id = TransactionId;
    newStorePaymentsHistory.authorization_number = AuthorizationNumber;

    if (transaction_code == '00') {
      //SUCCESS
      newStoreSubscription.expiration_date = new Date(
        moment().add(30, 'days').toString(),
      );
      newStoreSubscription.status = 1;
      newStorePaymentMethod.status = 1;
    } else {
      //ERROR CODE.....
      newStoreSubscription.status = 0;
      newStorePaymentMethod.status = 0;
    }

    let createdStoreSubscription = await this.StoreSubscriptionsService.create(
      newStoreSubscription,
    );

    let createdStorePaymentMethod = await this.create(newStorePaymentMethod);
    if (createdStoreSubscription)
      newStorePaymentsHistory.subscription_id = createdStoreSubscription.id;
    else
      throw new HttpException(
        {
          status: 424,
          error: 'Failed to create store subscription.',
        },
        424,
      );
    if (createdStorePaymentMethod)
      newStorePaymentsHistory.payment_method_id = createdStorePaymentMethod.id;
    else
      throw new HttpException(
        {
          status: 424,
          error: 'Failed to create store payment.',
        },
        424,
      );

    this.StorePaymentsHistoryService.create(newStorePaymentsHistory);
    if (createdStoreSubscription.status === 0) {
      let newStorePaymentsErrors: StorePaymentsErrorsEntity =
        new StorePaymentsErrorsEntity();
      newStorePaymentsErrors.subscription_id = createdStoreSubscription.id;
      newStorePaymentsErrors.payment_method_id = createdStorePaymentMethod.id;
      newStorePaymentsErrors.payment_date =
        newStorePaymentsHistory.payment_date;
      newStorePaymentsErrors.error_code = transaction_code;
      newStorePaymentsErrors.error_description = Description;

      this.StorePaymentsErrorsService.create(newStorePaymentsErrors);
    }

    if (transaction_code == '00') {
      return 'Payment processed successfully.';
    } else
      throw new HttpException(
        {
          status: 400,
          error: 'Payment failed.',
          description: Description,
        },
        400,
      );
  }
}
