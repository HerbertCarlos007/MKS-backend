import { Module } from '@nestjs/common';
import { UsersController } from '../app/controllers/users.controller';
import { UsersService } from '../app/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../app/interfaces/users.entity';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([UserEntity,]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
