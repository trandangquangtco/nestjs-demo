import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from 'db/db';
import { AuthController } from './Controllers/AuthController';

@Module({
  imports: [TypeOrmModule.forRoot(db)],
  controllers: [AuthController],
  providers: [
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '0.0.0.0',
            port: 3001,
          },
        });
      },
      inject: [ConfigService]
    },
  ],
})
export class AppModule {}
