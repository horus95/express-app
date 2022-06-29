import { Test, TestingModule } from '@nestjs/testing';
import { UsersByStoreController } from './users_by_store.controller';

describe('UsersByStoreController', () => {
  let controller: UsersByStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersByStoreController],
    }).compile();

    controller = module.get<UsersByStoreController>(UsersByStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
