import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorePaymentsHistoryController } from './store_payments_history.controller';
import { StorePaymentsHistoryEntity } from './store_payments_history.entity';
import { StorePaymentsHistoryService } from './store_payments_history.service';

@Module({
  imports: [TypeOrmModule.forFeature([StorePaymentsHistoryEntity])],
  controllers: [StorePaymentsHistoryController],
  providers: [StorePaymentsHistoryService],
  exports: [StorePaymentsHistoryService],
})
export class StorePaymentsHistoryModule {}
