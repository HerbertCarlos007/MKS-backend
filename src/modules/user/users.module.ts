import { Module } from '@nestjs/common';
import { UsersController } from '../../app/controllers/users.controller';
import { UsersService } from '../../app/services/user/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/app/interfaces/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
