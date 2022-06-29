import { Test, TestingModule } from '@nestjs/testing';
import { StorePaymentMethodsService } from './store_payment_methods.service';

describe('StorePaymentMethodsService', () => {
  let service: StorePaymentMethodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorePaymentMethodsService],
    }).compile();

    service = module.get<StorePaymentMethodsService>(StorePaymentMethodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
