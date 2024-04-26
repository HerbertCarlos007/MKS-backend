import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { UserEntity } from '../interfaces/users.entity';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(user: any): Promise<{
        token: string;
    }>;
    validateUser(email: string, password: string): Promise<UserEntity>;
}
