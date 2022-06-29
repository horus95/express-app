import { Body, Controller, Post } from '@nestjs/common';
import { CreateStorDetailsDto } from './dto/create.store_details.dto';
import { StoreDetailsService } from './store_details.service';

@Controller('store_details')
export class StoreDetailsController {
  constructor(private readonly StoreDetailsService: StoreDetailsService) {}

  @Post('/create')
  public create(
    @Body() storeDetails: CreateStorDetailsDto,
  ): Promise<CreateStorDetailsDto> {
    return this.StoreDetailsService.create(storeDetails);
  }
}
