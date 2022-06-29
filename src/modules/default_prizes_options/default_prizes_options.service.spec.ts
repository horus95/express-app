import { Test, TestingModule } from '@nestjs/testing';
import { DefaultPrizesOptionsService } from './default_prizes_options.service';

describe('DefaultPrizesOptionsService', () => {
  let service: DefaultPrizesOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultPrizesOptionsService],
    }).compile();

    service = module.get<DefaultPrizesOptionsService>(DefaultPrizesOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
