import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { NotFoundError } from 'rxjs';
import { CreateEditOrderDto } from './dto/create-edit-order.dto';

@Injectable()
export class ordersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}
  async getOrders(): Promise<Order[]> {
    const order = await this.orderRepository.find();
    if (!order) {
      throw new NotFoundException('Er gaat iets mis bij het inladen');
    }
    return order;
  }
  async getOrder(uuid: string): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: {
        uuid,
      },
    });

    if (!order) {
      throw new NotFoundException('Order niet gevonden');
    }

    return order;
  }

  async deleteOrder(orderUuid: string) {
    const order = await this.orderRepository.findOne({
      where: {
        uuid: orderUuid,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }
  }
  async CreateOrder(body: CreateEditOrderDto) {
    const order = await this.orderRepository.create(body);
    order.customerName = body.customerName;
    order.customerAddress = body.customerAddress;
    order.productWeight = body.productWeight;
    order.orderLineNumber = body.orderLineNumber;
    order.city = body.city;
    order.postalCode = body.postalCode;
    order.customerAddress = body.postalCode;
    order.customerName = body.postalCode;
    order.productHeight = body.productHeight;
    order.productName = body.productName;
    order.phoneNumber = body.phoneNumber;
    order.orderStatus = body.orderStatus;

    return await this.orderRepository.save(order);
  }
  async updateOrder(body: CreateEditOrderDto, uuid) {
    const order = await this.orderRepository.findOne({
      where: {
        uuid,
      },
    });

    if (!order) {
      throw new NotFoundException('Order niet gevonden');
    } else if (body == null) {
      throw new NotFoundException('Je hebt niks mee gestuurd');
    }
    order.customerName = body.customerName;
    order.customerAddress = body.customerAddress;
    order.productWeight = body.productWeight;
    order.orderLineNumber = body.orderLineNumber;
    order.city = body.city;
    order.postalCode = body.postalCode;
    order.customerAddress = body.postalCode;
    order.customerName = body.postalCode;
    order.productHeight = body.productHeight;
    order.productName = body.productName;
    order.phoneNumber = body.phoneNumber;
    order.orderStatus = body.orderStatus;

    return await this.orderRepository.save(order);
  }
}
