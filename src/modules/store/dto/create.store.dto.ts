import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStoreDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    store_category_id: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    country_id: number

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    contact_email: string

    @ApiProperty()
    @IsNotEmpty()
    contact_phone: string

    @ApiProperty()
    status: number

    @ApiProperty()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsNotEmpty()
    password: string
}