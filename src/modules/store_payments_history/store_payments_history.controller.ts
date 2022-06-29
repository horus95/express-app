import { Controller } from '@nestjs/common';
import { StorePaymentsHistoryService } from './store_payments_history.service';

@Controller('store_payments_history')
export class StorePaymentsHistoryController {
    constructor(private readonly StorePaymentsHistoryService: StorePaymentsHistoryService){}
}
