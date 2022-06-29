import { Test, TestingModule } from '@nestjs/testing';
import { StoreSubscriptionsController } from './store_subscriptions.controller';

describe('StoreSubscriptionsController', () => {
  let controller: StoreSubscriptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreSubscriptionsController],
    }).compile();

    controller = module.get<StoreSubscriptionsController>(StoreSubscriptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
