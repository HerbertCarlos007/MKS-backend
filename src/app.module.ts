import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UsersModule } from './modules/user/users.module';
import { join } from 'path';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './app/services/auth/auth.service';
import { AuthController } from './app/controllers/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { MoviesModule } from './modules/movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      
    } as TypeOrmModuleOptions),
    UsersModule,
    AuthModule,
    MoviesModule,

  ],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
})
export class AppModule { }
