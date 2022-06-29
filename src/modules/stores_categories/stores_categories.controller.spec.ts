import { Test, TestingModule } from '@nestjs/testing';
import { StoresCategoriesController } from './stores_categories.controller';

describe('StoresCategoriesController', () => {
  let controller: StoresCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoresCategoriesController],
    }).compile();

    controller = module.get<StoresCategoriesController>(StoresCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
