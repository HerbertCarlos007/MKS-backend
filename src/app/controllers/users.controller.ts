import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/user/users.service';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {

    constructor(private readonly userService: UsersService) {

    }

    @Get()
    async index() {
        return await this.userService.findAll()
    }

    @Post()
    async store(@Body() body: CreateUserDto) {
        return await this.userService.store(body)
    }

    @Get(':id')
    async findOne(@Param('id', new ParseUUIDPipe) id: string) {
        return await this.userService.findOne({
            where: { id }
        })
    }

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe) id: string, @Body() body: UpdateUserDto) {
        return await this.userService.update(id, body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', new ParseUUIDPipe) id: string) {
        await this.userService.destroy(id)
    }
}
