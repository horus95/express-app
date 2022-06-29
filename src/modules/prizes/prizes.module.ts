import { Module } from '@nestjs/common';
import { PrizesController } from './prizes.controller';
import { PrizesService } from './prizes.service';

@Module({
  controllers: [PrizesController],
  providers: [PrizesService],
})
export class PrizesModule {}
