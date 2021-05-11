import { Controller, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { comparePassword, hashPassword } from './helpers/HandlePassword';
import { signToken } from './helpers/HandleToken';
import { UsersService } from './UsersService';

@Controller()
export class UsersController {
  constructor(private UsersService: UsersService) {}

  // @MessagePattern({ cmd: 'signup' })
  @MessagePattern('signup')
  async createUser(@Payload() payload: any) {
    console.log(payload);
    payload.password = await hashPassword(payload.password);
    const create = await this.UsersService.addNewUser(payload);
    return create;
  }

  @MessagePattern('signin')
  async signinUser(body) {
    const checkEmail = await this.UsersService.findOneUser({
      email: body.email,
    });
    if (!checkEmail) {
      return 'Wrong Email';
    }
    const checkPassword = await comparePassword(
      body.password,
      checkEmail.password,
    );
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
