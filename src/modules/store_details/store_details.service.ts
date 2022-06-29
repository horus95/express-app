import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStorDetailsDto } from './dto/create.store_details.dto';
import { StoreDetailsEntity } from './store_details.entity';

@Injectable()
export class StoreDetailsService {
  @InjectRepository(StoreDetailsEntity)
  private readonly repository: Repository<StoreDetailsEntity>;

  public create(
    storeDetails: CreateStorDetailsDto,
  ): Promise<StoreDetailsEntity> {
    return this.repository.save(storeDetails);
  }
}
