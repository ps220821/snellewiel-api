import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { orderController } from './order.controller';
import { ordersService } from './order.service';
import { Order } from './order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],

  providers: [ordersService],
  controllers: [orderController],
})
export class OrderModule {}
