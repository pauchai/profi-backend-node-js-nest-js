import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from 'src/roles/dtos/create-role.dto';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags("Authorization")
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() dto: CreateUserDto){
        return this.authService.login(dto)
    }

    @Post('/registration')
    registration(@Body() dto: CreateUserDto){
        return this.authService.registration(dto)
    }
}
