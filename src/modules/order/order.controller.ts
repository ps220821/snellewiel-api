import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ordersService } from './order.service';
import { Order } from './order.entity';
import { CreateEditOrderDto } from './dto/create-edit-order.dto';
@Controller('order')
export class orderController {
  constructor(private service: ordersService) {}

  @Get()
  getAllOrders(@Param() params) {
    return this.service.getOrders();
  }
  @Get(':uuid')
  async getOrder(@Param('uuid') uuid: string): Promise<Order> {
    const order = await this.service.getOrder(uuid);

    return order;
  }

  @Put(':uuid')
  updateOrder(
    @Param('uuid')
    uuid: string,
    @Body() body: CreateEditOrderDto,
  ) {
    return this.service.updateOrder(body, uuid);
  }

  @Delete(':uuid')
  DeleteOrder(@Param('uuid') uuid: string) {
    return this.service.deleteOrder(uuid);
  }
  @Post()
  CreateOrder(@Body() body: CreateEditOrderDto) {
    return this.service.CreateOrder(body);
  }
}
