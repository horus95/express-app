import { Module } from '@nestjs/common';
import { StoreCustomPrizesOptionsController } from './store_custom_prizes_options.controller';
import { StoreCustomPrizesOptionsService } from './store_custom_prizes_options.service';

@Module({
  controllers: [StoreCustomPrizesOptionsController],
  providers: [StoreCustomPrizesOptionsService],
})
export class StoreCustomPrizesOptionsModule {}
