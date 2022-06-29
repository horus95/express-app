import { Test, TestingModule } from '@nestjs/testing';
import { StorePaymentsErrorsService } from './store_payments_errors.service';

describe('StorePaymentsErrorsService', () => {
  let service: StorePaymentsErrorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorePaymentsErrorsService],
    }).compile();

    service = module.get<StorePaymentsErrorsService>(StorePaymentsErrorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
