import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get('')
  getAllCustomers() {
    return this.customersService.getCustomers();
  }

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    throw new HttpException('Customer not found!', HttpStatus.BAD_REQUEST);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() customerDto: CreateCustomerDto) {
    this.customersService.createCustomer(customerDto);
  }
}
