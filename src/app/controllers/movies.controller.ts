import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { MoviesService } from '../services/movies/movies.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateMovieDto } from '../dto/movie/create-movie.dto';
import { UpdateMovieDto } from '../dto/movie/update-movie.dto';

@Controller('movies')
@UseGuards(AuthGuard('jwt'))
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    
    @Get()
    async index() {
        return await this.moviesService.findAll()
    }

    @Post()
    async store(@Body() body: CreateMovieDto) {
        return await this.moviesService.store(body)
    }

    @Get(':id')
    async findOne(@Param('id', new ParseUUIDPipe) id: string) {
        return await this.moviesService.findOne({
            where: { id }
        })
    }

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe) id: string, @Body() body: UpdateMovieDto) {
        return await this.moviesService.update(id, body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', new ParseUUIDPipe) id: string) {
        await this.moviesService.destroy(id)
    }
}
