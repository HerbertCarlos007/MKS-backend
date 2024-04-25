import { Module } from '@nestjs/common';
import { AuthService } from '../../app/services/auth/auth.service'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from '../user/users.module';
import { ConfigModule } from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt'
import { LocalStrategy } from 'src/app/strategies/local.strategy';
import { AuthController } from 'src/app/controllers/auth.controller';
import { JwtStrategy } from 'src/app/strategies/jwt.strategy';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        PassportModule,
        JwtModule.register({})
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule { }
