import { Module } from '@nestjs/common';
import { AuthService } from '../app/services/auth.service'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from './users.module';
import { ConfigModule } from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt'
import { LocalStrategy } from '../app/strategies/local.strategy';
import { AuthController } from '../app/controllers/auth.controller';
import { JwtStrategy } from '../app/strategies/jwt.strategy';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        PassportModule,
        JwtModule.register({})
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { }
