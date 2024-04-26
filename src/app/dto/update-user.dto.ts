import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, } from "class-validator";


export class UpdateUserDto {
    
    @ApiProperty({
        description: 'O nome do usuário',
        example: 'Cristiano Ronaldo'
    })
    @IsNotEmpty()
    name: string;
}