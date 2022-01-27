import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dtos/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags("Roles")
@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService){}

    @ApiOperation({summary: "Create role"})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: CreateRoleDto) {
        
        return this.roleService.createRole(dto)

    }

    @Get("/:value")
    getByValue(@Param('value') value: string) {
        
        return this.roleService.getRoleByValue(value)

    }
}
