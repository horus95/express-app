import { Body, Controller, Post } from '@nestjs/common';
import { processPaymentDto } from './dto/processPayment.dto';
import { StorePaymentMethodsService } from './store_payment_methods.service';

@Controller('store_payment_methods')
export class StorePaymentMethodsController {
  WSDURL: string;
  args: any;
  constructor(private StorePaymentMethodsService: StorePaymentMethodsService) {}

  @Post('/processor')
  public async processPayment(@Body() body: processPaymentDto): Promise<any> {
    return this.StorePaymentMethodsService.processPayment(body);
  }
}
