import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class processPaymentDto {
  @ApiProperty()
  @IsNotEmpty()
  store_id: number;

  @ApiProperty()
  @IsNotEmpty()
  accountToken: string;

  @ApiProperty()
  @IsNotEmpty()
  account_number: string;

  @ApiProperty()
  @IsNotEmpty()
  card_token: string;

  @ApiProperty()
  @IsNotEmpty()
  card_number: string;

  @ApiProperty()
  @IsNotEmpty()
  card_holdername: string;

  @ApiProperty()
  @IsNotEmpty()
  payed_amount: number;
}
