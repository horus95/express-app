import { Test, TestingModule } from '@nestjs/testing';
import { StorePaymentsHistoryController } from './store_payments_history.controller';

describe('StorePaymentsHistoryController', () => {
  let controller: StorePaymentsHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorePaymentsHistoryController],
    }).compile();

    controller = module.get<StorePaymentsHistoryController>(StorePaymentsHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
