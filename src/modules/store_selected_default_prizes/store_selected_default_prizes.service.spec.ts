import { Test, TestingModule } from '@nestjs/testing';
import { StoreSelectedDefaultPrizesService } from './store_selected_default_prizes.service';

describe('StoreSelectedDefaultPrizesService', () => {
  let service: StoreSelectedDefaultPrizesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreSelectedDefaultPrizesService],
    }).compile();

    service = module.get<StoreSelectedDefaultPrizesService>(StoreSelectedDefaultPrizesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
