import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStorDetailsDto {
    @ApiProperty()
    @IsNotEmpty()
    store_id: number;

    @ApiProperty()
    @IsNotEmpty()
    profile_color: string

    @ApiProperty()
    @IsNotEmpty()
    text_color: string
}