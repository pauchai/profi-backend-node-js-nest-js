import {ApiProperty} from "@nestjs/swagger"
import { IsEmail, IsString, Length } from "class-validator"
export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'Email'})    
    @IsString({message: "Must be string"})
    @IsEmail({}, {message: "uncorrect email"})
    readonly email: string

    @ApiProperty({example: '12345678', description: 'Password'})    
    @IsString({message: "Must be string"})
    @Length(6,16, {message: "Not less then 6 and more then 16"} )
    readonly password: string
}