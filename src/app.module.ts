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
import typeOrmConfig from './app/typeorm.config';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'.env',
  
    }),
    UsersModule,
    AuthModule,
    MoviesModule,
    CacheModule.register({
      ttl: 300000,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.PORT_REDIS
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    
  
  ],
  providers: [AuthService, JwtService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ],
  controllers: [AuthController, MoviesController, UsersController],
})
export class AppModule { }
