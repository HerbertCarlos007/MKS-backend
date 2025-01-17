import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from 'src/app/controllers/movies.controller';
import { MovieEntity } from '../app/interfaces/movies.entity';
import { MoviesService } from '../app/services/movies.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forFeature([MovieEntity])
    ],

    controllers: [MoviesController],
    providers: [MoviesService],
    exports: [MoviesService]
})
export class MoviesModule { }
