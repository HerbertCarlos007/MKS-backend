import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './modules/users.module';
import { join } from 'path';
import { AuthModule } from './modules/auth.module';
import { AuthService } from './app/services/auth.service';
import { AuthController } from './app/controllers/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { MoviesModule } from './modules/movies.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MoviesController } from './app/controllers/movies.controller';
import { UsersController } from './app/controllers/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'.env',
  
    }),
    UsersModule,
    AuthModule,
    MoviesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    } as TypeOrmModuleOptions),
    
  
  ],
  providers: [AuthService, JwtService,
    
  ],
  controllers: [AuthController, MoviesController, UsersController],
})
export class AppModule { }
