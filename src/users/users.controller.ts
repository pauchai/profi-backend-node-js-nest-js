import { Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger"
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Rolels } from 'src/auth/roles-auth.decorator';
import { RolesAuthGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dtos/add-role.dto';
import { BanUserDto } from './dtos/ban-user.dto';
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
    @Rolels("ADMIN")
    @UseGuards(RolesAuthGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }
    @ApiOperation({summary: "add role to user"})
    @ApiResponse({status: 200})   
    @Rolels("ADMIN")
    @UseGuards(RolesAuthGuard)
    @Post("/role")
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto)
    }

    @ApiOperation({summary: "bane user"})
    @ApiResponse({status: 200})   
    @Rolels("ADMIN")
    @UseGuards(RolesAuthGuard)
    @Post("/ban")
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto)
    }
}
