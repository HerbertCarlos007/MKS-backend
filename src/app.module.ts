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
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      ttl: 300000,
      store: redisStore,
      host: 'localhost',
      port: 6379
    }),
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
  providers: [AuthService, JwtService, 
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ],
  controllers: [AuthController],
})
export class AppModule { }
