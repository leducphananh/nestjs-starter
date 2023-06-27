import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'anhldp@gmail.com',
      name: 'Anhldp 1',
    },
    {
      id: 2,
      email: 'anhldp2@gmail.com',
      name: 'Anhldp 2',
    },
    {
      id: 3,
      email: 'anhldp3@gmail.com',
      name: 'Anhldp 3',
    },
  ];

  getCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((cus) => cus.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
    return this.customers;
  }
}
