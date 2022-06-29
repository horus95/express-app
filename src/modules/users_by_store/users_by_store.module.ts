import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersByStoreController } from './users_by_store.controller';
import { UsersByStoreEntity } from './users_by_store.entity';
import { UsersByStoreService } from './users_by_store.service';

@Module({
    imports: [TypeOrmModule.forFeature([UsersByStoreEntity])],
    controllers: [UsersByStoreController],
    providers: [UsersByStoreService],
    exports: [UsersByStoreService]
  })
export class UsersByStoreModule {}
