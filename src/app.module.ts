import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from 'db/db';
import { UserModule } from './UserModule';

@Module({
  imports: [TypeOrmModule.forRoot(db), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
