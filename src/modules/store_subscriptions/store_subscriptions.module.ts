import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreSubscriptionsController } from './store_subscriptions.controller';
import { StoreSubscriptionsEntity } from './store_subscriptions.entity';
import { StoreSubscriptionsService } from './store_subscriptions.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoreSubscriptionsEntity])],
  controllers: [StoreSubscriptionsController],
  providers: [StoreSubscriptionsService],
  exports: [StoreSubscriptionsService]
})
export class StoreSubscriptionsModule {}
