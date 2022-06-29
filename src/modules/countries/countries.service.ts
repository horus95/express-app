import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountriesEntity } from './countries.entity';
import { CountriesModel } from './countries.interface';

@Injectable()
export class CountriesService {

    @InjectRepository(CountriesEntity)
    private readonly repository: Repository<CountriesEntity>

    public findAll(): Promise<CountriesModel[]> {
        return this.repository.find();
    }
}
