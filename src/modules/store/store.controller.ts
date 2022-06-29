import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateStoreDto } from './dto/create.store.dto';
import { StoreModel } from './store.interface';
import { StoreService } from './store.service';
import { Response } from 'express';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('/create')
  public create(@Body() store: CreateStoreDto, @Res({ passthrough: true }) res: Response): Promise<StoreModel> {
    return this.storeService.create(store, res);
  }

  @Get('/')
  public findAll() {
    return this.storeService.findAll();
  }
}
