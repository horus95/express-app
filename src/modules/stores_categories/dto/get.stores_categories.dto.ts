import { ApiProperty } from '@nestjs/swagger';

export class GetStoresCategoriesDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    status: number;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;

    @ApiProperty()
    deleted_at: Date;
}