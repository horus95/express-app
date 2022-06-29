import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorePaymentsErrorsModule } from '../store_payments_errors/store_payments_errors.module';
import { StorePaymentsHistoryModule } from '../store_payments_history/store_payments_history.module';
import { StoreSubscriptionsModule } from '../store_subscriptions/store_subscriptions.module';
import { StorePaymentMethodsController } from './store_payment_methods.controller';
import { StorePaymentMethodsEntity } from './store_payment_methods.entity';
import { StorePaymentMethodsService } from './store_payment_methods.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StorePaymentMethodsEntity]),
    StoreSubscriptionsModule,
    StorePaymentsHistoryModule,
    StorePaymentsErrorsModule,
  ],
  controllers: [StorePaymentMethodsController],
  providers: [StorePaymentMethodsService],
})
export class StorePaymentMethodsModule {}
