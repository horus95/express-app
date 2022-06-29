import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreCatagoriesEntity } from './stores_categories.entity';


@Injectable()
export class StoresCategoriesService {
  @InjectRepository(StoreCatagoriesEntity)
  private readonly repository: Repository<StoreCatagoriesEntity>

  public async findAll(): Promise<StoreCatagoriesEntity[]> {
    return this.repository.find();
  }

  // public create(storesCategorie: CreateStoresCategoriesDto): CreateStoresCategoriesDto {
  //   this.storesCategories.push(storesCategorie);
  //   return storesCategorie;
  // }
}
