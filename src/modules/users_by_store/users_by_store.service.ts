import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersByStoreEntity } from './users_by_store.entity';

@Injectable()
export class UsersByStoreService {
  @InjectRepository(UsersByStoreEntity)
  private readonly repository: Repository<UsersByStoreEntity>;

  public create(userInfo: any): Promise<UsersByStoreEntity> {
    return this.repository.save(userInfo);
  }

  public async findOneByUsername(username: any): Promise<UsersByStoreEntity | undefined> {
    return this.repository.findOne(username);
  }

}
