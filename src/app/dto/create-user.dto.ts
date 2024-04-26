import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessageHelper } from "src/helpers/messages.helper";
import { RegexHelper } from "src/helpers/regex.helper";

export class CreateUserDto {
    @ApiProperty({
        description: 'O nome do usuário',
        example: 'Cristiano Ronaldo'
    })
    @IsNotEmpty()
    name: string;
    
    
    @ApiProperty({
        description: 'O email do usuário',
        example: 'cristianoronaldo@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @ApiProperty({
        description: 'A senha do usuário',
        example: '54110799jA#'
    })
    @ApiProperty()
    @IsNotEmpty()
    @Matches(RegexHelper.password, {
        message: MessageHelper.PASSWORD_VALID
    })
    password: string;
}