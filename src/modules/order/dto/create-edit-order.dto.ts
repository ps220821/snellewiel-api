import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '../order.entity';

export class CreateEditOrderDto {
  @ApiProperty()
  uuid?: string;
  @ApiProperty()
  orderLineNumber: string;
  @ApiProperty()
  productName: string;
  @ApiProperty()
  productHeight: number;
  @ApiProperty()
  productWeight: number;
  @ApiProperty()
  customerName: string;
  @ApiProperty()
  customerAddress: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  postalCode: string;
  @ApiProperty()
  phoneNumber: number;
  @ApiProperty({ type: 'enum' })
  orderStatus: OrderStatus;
}
