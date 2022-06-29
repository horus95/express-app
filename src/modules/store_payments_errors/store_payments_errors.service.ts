import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StorePaymentsErrorsEntity } from './store_payments_errors.entity';

@Injectable()
export class StorePaymentsErrorsService {
  @InjectRepository(StorePaymentsErrorsEntity)
  private readonly repository: Repository<StorePaymentsErrorsEntity>;

  public create(
    data: StorePaymentsErrorsEntity,
  ): Promise<StorePaymentsErrorsEntity> {
    return this.repository.save(data);
  }
}
