import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from 'src/app/controllers/movies.controller';
import { MovieEntity } from 'src/app/interfaces/movies.entity';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Module({
    imports: [TypeOrmModule.forFeature([MovieEntity])],
    controllers: [MoviesController],
    providers: [MoviesService],
    exports: [MoviesService]
})
export class MoviesModule {}
