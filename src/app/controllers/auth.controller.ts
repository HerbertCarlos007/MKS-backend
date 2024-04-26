import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('auth')
@UseGuards(AuthGuard('local'))
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: { type: 'string' },
                password: { type: 'string', format: 'password' },
            },
            required: ['username', 'password'],
        },
    })
    async login(@Req() req: any) {
        return await this.authService.login(req.user)
    }
}
