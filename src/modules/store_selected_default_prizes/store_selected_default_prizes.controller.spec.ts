import { Test, TestingModule } from '@nestjs/testing';
import { StoreSelectedDefaultPrizesController } from './store_selected_default_prizes.controller';

describe('StoreSelectedDefaultPrizesController', () => {
  let controller: StoreSelectedDefaultPrizesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreSelectedDefaultPrizesController],
    }).compile();

    controller = module.get<StoreSelectedDefaultPrizesController>(StoreSelectedDefaultPrizesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
