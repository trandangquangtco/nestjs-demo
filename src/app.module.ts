import { Module } from '@nestjs/common';
import { UsersController } from './UsersController';
import { UsersService } from './UsersService';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
