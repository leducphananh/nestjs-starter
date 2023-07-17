import { comparePasswords } from './../utils/bcrypt';
import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUserByUsername(username);
    if (user) {
      const isMatch = comparePasswords(password, user.password);
      if (isMatch) return user;
      return null;
    }
    return null;
  }
}
