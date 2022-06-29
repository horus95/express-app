import { Module } from '@nestjs/common';
import { DefaultPrizesOptionsController } from './default_prizes_options.controller';
import { DefaultPrizesOptionsService } from './default_prizes_options.service';

@Module({
  controllers: [DefaultPrizesOptionsController],
  providers: [DefaultPrizesOptionsService]
})
export class DefaultPrizesOptionsModule {}
