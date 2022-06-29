import { Test, TestingModule } from '@nestjs/testing';
import { UsersByStoreService } from './users_by_store.service';

describe('UsersByStoreService', () => {
  let service: UsersByStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersByStoreService],
    }).compile();

    service = module.get<UsersByStoreService>(UsersByStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
