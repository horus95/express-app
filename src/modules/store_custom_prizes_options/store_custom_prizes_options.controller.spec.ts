import { Test, TestingModule } from '@nestjs/testing';
import { StoreCustomPrizesOptionsController } from './store_custom_prizes_options.controller';

describe('StoreCustomPrizesOptionsController', () => {
  let controller: StoreCustomPrizesOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreCustomPrizesOptionsController],
    }).compile();

    controller = module.get<StoreCustomPrizesOptionsController>(StoreCustomPrizesOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
