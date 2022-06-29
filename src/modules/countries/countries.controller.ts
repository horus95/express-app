import { Controller, Get } from '@nestjs/common';
import { CountriesModel } from './countries.interface';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('/')
  public findAll(): Promise<CountriesModel[]> {
    return this.countriesService.findAll();
  }
}
