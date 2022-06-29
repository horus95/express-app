import { Test, TestingModule } from '@nestjs/testing';
import { StorePaymentMethodsController } from './store_payment_methods.controller';

describe('StorePaymentMethodsController', () => {
  let controller: StorePaymentMethodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorePaymentMethodsController],
    }).compile();

    controller = module.get<StorePaymentMethodsController>(StorePaymentMethodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
