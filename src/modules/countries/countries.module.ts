import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesEntity } from './countries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CountriesEntity])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
