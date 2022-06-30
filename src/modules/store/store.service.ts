import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersByStoreEntity } from '../users_by_store/users_by_store.entity';
import { UsersByStoreService } from '../users_by_store/users_by_store.service';
import { CreateStoreDto } from './dto/create.store.dto';
import { StoreEntity } from './store.entity';
import { StoreModel } from './store.interface';
import * as sc from 'simplecrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class StoreService {
  constructor(
    private UsersByStoreService: UsersByStoreService,
    private JwtService: JwtService,
  ) {}

  @InjectRepository(StoreEntity)
  private readonly repository: Repository<StoreEntity>;

  public async create(store: CreateStoreDto, res: Response): Promise<any> {
    const createdStore = await this.repository.save(store).catch((e) => {
      throw new BadRequestException(e.detail);
    });

    if (createdStore) {
      let newUser = new UsersByStoreEntity();
      newUser.store_id = createdStore.id;
      newUser.username = store.username;
      newUser.password = sc.encrypt(store.password);

      const newCreatedUser = await this.UsersByStoreService.create(
        newUser,
      ).catch((e) => {
        throw new BadRequestException(e.detail);
      });

      if (newCreatedUser) {
        const accessToken = this.JwtService.sign({ ...newCreatedUser });

        res.status(HttpStatus.CREATED).json({
          status: HttpStatus.CREATED,
          message: 'User and Store are created.',
          store_id: createdStore.id,
          accessToken: accessToken,
        });
      } else {
        throw new HttpException(
          {
            status: 400,
            error: 'Failed to new user.',
          },
          400,
        );
      }
    } else
      throw new HttpException(
        {
          status: 424,
          error: 'Failed to create store entity.',
        },
        424,
      );
  }

  public findAll(): Promise<StoreModel[]> {
    return this.repository.find();
  }
}
