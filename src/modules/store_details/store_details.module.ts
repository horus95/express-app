import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreDetailsController } from './store_details.controller';
import { StoreDetailsEntity } from './store_details.entity';
import { StoreDetailsService } from './store_details.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoreDetailsEntity])],
  controllers: [StoreDetailsController],
  providers: [StoreDetailsService],
})
export class StoreDetailsModule {}
