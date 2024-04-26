import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, } from "class-validator";


export class UpdateMovieDto {
    @ApiProperty({
        description: 'Nome do filme',
        example: 'Batman'
    })
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({
        description: 'Descrição do filme',
        example: 'Batman luta com coringa para salvar a cidade'
    })
    @IsNotEmpty()
    description: string;
    
    @ApiProperty({
        description: 'Gênero do filme',
        example: 'Ação'
    })
    @IsNotEmpty()
    gender: string;
    
    @ApiProperty({
        description: 'Ano de lançamento',
        example: '2010'
    })
    @IsNotEmpty()
    releaseYear: string;
}