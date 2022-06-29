import { Module } from '@nestjs/common';
import { CountriesModule } from '../modules/countries/countries.module';
import { StoreModule } from '../modules/store/store.module';
import { StoresCategoriesModule } from '../modules/stores_categories/stores_categories.module';
import { StoreDetailsModule } from '../modules/store_details/store_details.module';
import { UsersByStoreModule } from '../modules/users_by_store/users_by_store.module';
import { StoreSubscriptionsModule } from '../modules/store_subscriptions/store_subscriptions.module';
import { StorePaymentMethodsModule } from '../modules/store_payment_methods/store_payment_methods.module';
import { StorePaymentsHistoryModule } from '../modules/store_payments_history/store_payments_history.module';
import { StorePaymentsErrorsModule } from '../modules/store_payments_errors/store_payments_errors.module';
import { PrizesModule } from 'src/modules/prizes/prizes.module';
import { DefaultPrizesOptionsModule } from 'src/modules/default_prizes_options/default_prizes_options.module';
import { StoreSelectedDefaultPrizesModule } from 'src/modules/store_selected_default_prizes/store_selected_default_prizes.module';

@Module({
  imports: [
    CountriesModule,
    StoreModule,
    StoresCategoriesModule,
    StoreDetailsModule,
    UsersByStoreModule,
    StoreSubscriptionsModule,
    StorePaymentsHistoryModule,
    StorePaymentMethodsModule,
    StorePaymentsErrorsModule,
    PrizesModule,
    DefaultPrizesOptionsModule,
    StoreSubscriptionsModule,
    StoreSelectedDefaultPrizesModule,
  ],
})
export class ApiModule {}
