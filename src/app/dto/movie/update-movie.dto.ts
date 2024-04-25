import { IsNotEmpty, } from "class-validator";


export class UpdateMovieDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    description: string;
    
    @IsNotEmpty()
    gender: string;
    
    @IsNotEmpty()
    releaseYear: string;
}