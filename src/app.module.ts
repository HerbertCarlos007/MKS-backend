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
import { CacheInterceptor } from '@nestjs/cache-manager';

import { APP_INTERCEPTOR } from '@nestjs/core';
import { MoviesController } from './app/controllers/movies.controller';
import { UsersController } from './app/controllers/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    MoviesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'srv887.hstgr.io',
      port: 3306,
      username: 'u379300444_herbert_carlos',
      password: '41568106hB',
      database: 'u379300444_database_herbe',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    } ),
    
  
  ],
  providers: [AuthService, JwtService,
  
  ],
  controllers: [AuthController, MoviesController, UsersController],
})
export class AppModule { }
