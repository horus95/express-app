import { Test, TestingModule } from '@nestjs/testing';
import { StoreCustomPrizesOptionsService } from './store_custom_prizes_options.service';

describe('StoreCustomPrizesOptionsService', () => {
  let service: StoreCustomPrizesOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreCustomPrizesOptionsService],
    }).compile();

    service = module.get<StoreCustomPrizesOptionsService>(StoreCustomPrizesOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
