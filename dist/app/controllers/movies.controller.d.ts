import { MoviesService } from '../services/movies.service';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    index(): Promise<import("../interfaces/movies.entity").MovieEntity[]>;
    store(body: CreateMovieDto): Promise<import("../interfaces/movies.entity").MovieEntity>;
    findOne(id: string): Promise<import("../interfaces/movies.entity").MovieEntity>;
    update(id: string, body: UpdateMovieDto): Promise<import("../interfaces/movies.entity").MovieEntity>;
    delete(id: string): Promise<void>;
}
