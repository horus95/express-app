import { Module } from '@nestjs/common';
import { StoreSelectedDefaultPrizesController } from './store_selected_default_prizes.controller';
import { StoreSelectedDefaultPrizesService } from './store_selected_default_prizes.service';

@Module({
  controllers: [StoreSelectedDefaultPrizesController],
  providers: [StoreSelectedDefaultPrizesService]
})
export class StoreSelectedDefaultPrizesModule {}
