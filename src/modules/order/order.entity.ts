import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export enum OrderStatus {
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
  SHIPMENT = 'SHIPMENT',
  DELIVERED = 'DELIVERED',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 200, nullable: false })
  orderLineNumber: string;

  @Column({ length: 100 })
  productName: string;

  @Column({ type: 'decimal' })
  productHeight: number;

  @Column({ type: 'decimal' })
  productWeight: number;

  @Column({})
  customerName: string;

  @Column({})
  customerAddress: string;

  @Column({})
  city: string;

  @Column({ length: 8 })
  postalCode: string;

  @Column({})
  phoneNumber: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  orderStatus: OrderStatus;
}
