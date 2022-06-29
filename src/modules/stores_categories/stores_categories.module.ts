import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresCategoriesController } from './stores_categories.controller';
import { StoreCatagoriesEntity } from './stores_categories.entity';
import { StoresCategoriesService } from './stores_categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoreCatagoriesEntity])],
  controllers: [StoresCategoriesController],
  providers: [StoresCategoriesService],
})
export class StoresCategoriesModule {}
