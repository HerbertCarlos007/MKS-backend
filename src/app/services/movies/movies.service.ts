import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from 'src/app/dto/movie/create-movie.dto';
import { UpdateMovieDto } from 'src/app/dto/movie/update-movie.dto';
import { MovieEntity } from 'src/app/interfaces/movies.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MovieEntity)
        private readonly movieRepository: Repository<MovieEntity>,
    ) {}
    
    async store(data: CreateMovieDto) {
        const movie = this.movieRepository.create(data)
        return await this.movieRepository.save(movie)
    }
    
    async findAll() {
        return await this.movieRepository.find()
    }
    
    async findOne(options: FindOneOptions<MovieEntity>) {
        try {
            return await this.movieRepository.findOneOrFail(options)
        } catch (error) {
            throw new NotAcceptableException(error.message)
        }
    }
    
    async update(id: string, data: UpdateMovieDto) {
        const movie = await this.movieRepository.findOneOrFail({
            where: {id}
        })
        
        this.movieRepository.merge(movie, data)
        return await this.movieRepository.save(movie)
    }
    
    async destroy(id: string) {
        await this.movieRepository.findOneOrFail({
            where: {id}
        })
        this.movieRepository.softDelete({id})
    }
}
