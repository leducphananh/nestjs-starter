import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { SerializedUser } from 'src/users/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers() {
    const users = await this.userRepository.find({});
    return users.map((user) => new SerializedUser(user));
  }

  async getUserByUsername(username: string) {
    const user = await this.userRepository.findOne({
      where: {
        username,
      },
    });
    return user ? new SerializedUser(user) : undefined;
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    return user ? new SerializedUser(user) : undefined;
  }

  createUser(userDto: CreateUserDto) {
    const newUser = this.userRepository.create(userDto);
    return this.userRepository.save(newUser);
  }

  async findUserByUsername(username: string) {
    const user = await this.userRepository.findOne({
      where: {
        username,
      },
    });
    return user ? new SerializedUser(user) : undefined;
  }
}
