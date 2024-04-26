import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth() 
@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get('/hello')
    async hello() {
        return 'hello world'
    }
    
    @Get()
    @UseGuards(AuthGuard('jwt'))
    async index() {
        return await this.userService.findAll()
    }

    @Post()
    async store(@Body() body: CreateUserDto) {
        return await this.userService.store(body)
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    async findOne(@Param('id', new ParseUUIDPipe) id: string) {
        return await this.userService.findOne({
            where: { id }
        })
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Param('id', new ParseUUIDPipe) id: string, @Body() body: UpdateUserDto) {
        return await this.userService.update(id, body)
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', new ParseUUIDPipe) id: string) {
        await this.userService.destroy(id)
    }
}
