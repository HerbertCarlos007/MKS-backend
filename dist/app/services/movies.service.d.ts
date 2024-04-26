import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { MovieEntity } from '../interfaces/movies.entity';
import { FindOneOptions, Repository } from 'typeorm';
export declare class MoviesService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<MovieEntity>);
    store(data: CreateMovieDto): Promise<MovieEntity>;
    findAll(): Promise<MovieEntity[]>;
    findOne(options: FindOneOptions<MovieEntity>): Promise<MovieEntity>;
    update(id: string, data: UpdateMovieDto): Promise<MovieEntity>;
    destroy(id: string): Promise<void>;
}
