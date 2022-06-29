import { Test, TestingModule } from '@nestjs/testing';
import { DefaultPrizesOptionsController } from './default_prizes_options.controller';

describe('DefaultPrizesOptionsController', () => {
  let controller: DefaultPrizesOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultPrizesOptionsController],
    }).compile();

    controller = module.get<DefaultPrizesOptionsController>(DefaultPrizesOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
