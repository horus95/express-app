import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StorePaymentsHistoryEntity } from './store_payments_history.entity';

@Injectable()
export class StorePaymentsHistoryService {
  @InjectRepository(StorePaymentsHistoryEntity)
  private readonly repository: Repository<StorePaymentsHistoryEntity>;

  public create(
    data: StorePaymentsHistoryEntity,
  ): Promise<StorePaymentsHistoryEntity> {
    return this.repository.save(data);
  }
}
