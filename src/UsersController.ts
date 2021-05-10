import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { comparePassword, hashPassword } from './helpers/HandlePassword';
import { signToken } from './helpers/HandleToken';
import { UsersService } from './UsersService';

@Controller()
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @MessagePattern('signup')
  async createUser(body) {
    body.password = await hashPassword(body.password);
    const create = await this.UsersService.addNewUser(body);
    return create;
  }

  @MessagePattern('signin')
  async signinUser(email, password) {
    const checkEmail = await this.UsersService.findOneUser({ email });
    if (!checkEmail) {
      return 'Wrong Email';
    }
    const checkPassword = await comparePassword(password, checkEmail.password);
    if (!checkPassword) {
      return 'Wrong Password';
    } else {
      const token = signToken({
        id: checkEmail.id,
        date: Date.now(),
      });
      await this.UsersService.fixUser(checkEmail.id, { token });
      return token;
    }
  }
}
