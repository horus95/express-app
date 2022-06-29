import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CountriesEntity } from 'src/modules/countries/countries.entity';
import { DefaultPrizesOptionsEntity } from 'src/modules/default_prizes_options/default_prizes_options.entity';
import { PrizesEntity } from 'src/modules/prizes/prizes.entity';
import { StoreEntity } from 'src/modules/store/store.entity';
import { StoreCatagoriesEntity } from 'src/modules/stores_categories/stores_categories.entity';
import { StoreCustomPrizeOptionsEntity } from 'src/modules/store_custom_prizes_options/store_custom_prizes_options.entity';
import { StoreDetailsEntity } from 'src/modules/store_details/store_details.entity';
import { StorePaymentsErrorsEntity } from 'src/modules/store_payments_errors/store_payments_errors.entity';
import { StorePaymentsHistoryEntity } from 'src/modules/store_payments_history/store_payments_history.entity';
import { StorePaymentMethodsEntity } from 'src/modules/store_payment_methods/store_payment_methods.entity';
import { StoreSelectedDefaultPrizesEntity } from 'src/modules/store_selected_default_prizes/store_selected_default_prizes.entity';
import { StoreSubscriptionsEntity } from 'src/modules/store_subscriptions/store_subscriptions.entity';
import { UsersByStoreEntity } from 'src/modules/users_by_store/users_by_store.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('DB_HOST') || 'localhost',
      port: this.config.get<number>('DB_PORT') || 5432,
      username: this.config.get<string>('DB_USERNAME') || 'postgres',
      password: this.config.get<string>('DB_PASSWORD') || 'root',
      database: this.config.get<string>('DB') || 'postgres',
      entities: [
        CountriesEntity,
        StoreEntity,
        StoreCatagoriesEntity,
        UsersByStoreEntity,
        StoreDetailsEntity,
        StoreSubscriptionsEntity,
        StorePaymentMethodsEntity,
        StorePaymentsHistoryEntity,
        StorePaymentsErrorsEntity,
        PrizesEntity,
        DefaultPrizesOptionsEntity,
        StoreCustomPrizeOptionsEntity,
        StoreSelectedDefaultPrizesEntity,
      ],
      synchronize: true, // never use TRUE in production!
    };
  }
}
