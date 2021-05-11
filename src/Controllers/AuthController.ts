import { Body, Controller, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth/users')
export class AuthController {
  constructor(@Inject('USER_SERVICE') private UserService: ClientProxy) {}

  @Post('/register')
  async createUser(@Req() req: Request, @Res() res: Response) {
    const create = await this.UserService.send('signup', req.body).toPromise();
    return res.json(create);
  }

  @Post('/login')
  async loginUser(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    const login = await this.UserService.send('signin', {
      email,
      password,
    }).toPromise();
    return res.json(login);
  }
}
