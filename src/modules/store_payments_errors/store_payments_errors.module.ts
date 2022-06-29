import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorePaymentsErrorsController } from './store_payments_errors.controller';
import { StorePaymentsErrorsEntity } from './store_payments_errors.entity';
import { StorePaymentsErrorsService } from './store_payments_errors.service';

@Module({
    imports: [TypeOrmModule.forFeature([StorePaymentsErrorsEntity])],
    controllers: [StorePaymentsErrorsController],
    providers: [StorePaymentsErrorsService],
    exports: [StorePaymentsErrorsService]
  })
export class StorePaymentsErrorsModule {}
