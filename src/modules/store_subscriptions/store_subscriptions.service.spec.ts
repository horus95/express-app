import { Test, TestingModule } from '@nestjs/testing';
import { StoreSubscriptionsService } from './store_subscriptions.service';

describe('StoreSubscriptionsService', () => {
  let service: StoreSubscriptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreSubscriptionsService],
    }).compile();

    service = module.get<StoreSubscriptionsService>(StoreSubscriptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
