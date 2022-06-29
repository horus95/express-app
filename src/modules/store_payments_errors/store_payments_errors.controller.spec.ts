import { Test, TestingModule } from '@nestjs/testing';
import { StorePaymentsErrorsController } from './store_payments_errors.controller';

describe('StorePaymentsErrorsController', () => {
  let controller: StorePaymentsErrorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorePaymentsErrorsController],
    }).compile();

    controller = module.get<StorePaymentsErrorsController>(StorePaymentsErrorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
