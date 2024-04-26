import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from '../interfaces/users.entity';
import { compareSync } from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }

    async login(user) {
        const payload = { sub: user.id, email: user.email }
        
        return {
            token: this.jwtService.signAsync(payload, {expiresIn: '10m',privateKey: process.env.JWT_SECRET_KEY })
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
    
        if (!user) {
            return { valid: false }
        }
    
        const isPasswordValid = compareSync(password, user.password)
        if (!isPasswordValid) return null
    
        return user
    }
    
}
