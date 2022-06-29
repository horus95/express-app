import { Test, TestingModule } from '@nestjs/testing';
import { StoresCategoriesService } from './stores_categories.service';

describe('StoresCategoriesService', () => {
  let service: StoresCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoresCategoriesService],
    }).compile();

    service = module.get<StoresCategoriesService>(StoresCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
