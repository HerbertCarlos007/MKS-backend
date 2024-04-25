import { IsNotEmpty } from "class-validator";


export class CreateMovieDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    description: string;
    
    @IsNotEmpty()
    gender: string;
    
    @IsNotEmpty()
    releaseYear: string;
    
    
    
    
    
}