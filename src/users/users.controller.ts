import { Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger"
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    @ApiOperation({summary: "Create user"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }
    @ApiOperation({summary: "get List users"})
    @ApiResponse({status: 200, type: [User]})   
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }
}
