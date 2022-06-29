import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GetStoresCategoriesDto } from './dto/get.stores_categories.dto';
import { StoresCategoriesService } from './stores_categories.service';

@Controller('stores_categories')
export class StoresCategoriesController {
    constructor(private readonly StoresCategoriesService: StoresCategoriesService) { }

    @Get('/')
    public findAll(): Promise<GetStoresCategoriesDto[]> {
        return this.StoresCategoriesService.findAll();
    }
}
