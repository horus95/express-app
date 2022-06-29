import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreSubscriptionsEntity } from './store_subscriptions.entity';

@Injectable()
export class StoreSubscriptionsService {
    @InjectRepository(StoreSubscriptionsEntity)
    private readonly repository: Repository<StoreSubscriptionsEntity>
    
    public async create(subscription: StoreSubscriptionsEntity): Promise<StoreSubscriptionsEntity> {
        console.log("we are in store subscription service => ", subscription)
        return this.repository.save(subscription)
    }
}