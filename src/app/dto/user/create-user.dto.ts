import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessageHelper } from "src/helpers/messages.helper";
import { RegexHelper } from "src/helpers/regex.helper";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @Matches(RegexHelper.password, {
        message: MessageHelper.PASSWORD_VALID
    })
    password: string;
}