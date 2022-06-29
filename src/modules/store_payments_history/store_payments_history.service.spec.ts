import { Test, TestingModule } from '@nestjs/testing';
import { StorePaymentsHistoryService } from './store_payments_history.service';

describe('StorePaymentsHistoryService', () => {
  let service: StorePaymentsHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorePaymentsHistoryService],
    }).compile();

    service = module.get<StorePaymentsHistoryService>(StorePaymentsHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
