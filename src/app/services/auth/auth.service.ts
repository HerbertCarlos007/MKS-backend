import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { UserEntity } from 'src/app/interfaces/users.entity';
import { compareSync } from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }

    async login(user) {
        const payload = { sub: user.id, email: user.email }

        return {
            token: this.jwtService.sign(payload, {privateKey: process.env.JWT_SECRET_KEY })
        }
    }

    async validateUser(email: string, password: string) {
        let user: UserEntity
        try {
            user = await this.userService.findOne({
                where: { email }
            })
        } catch (error) {
            return null
        }

        const isPasswordValid = compareSync(password, user.password)
        if (!isPasswordValid) return null

        return user
    }
}
