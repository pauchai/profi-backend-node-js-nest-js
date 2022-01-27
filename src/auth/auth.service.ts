import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.model';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}

    async login(dto: CreateUserDto){
        const user = await this.validateUser(dto)
        return this.generateToken(user)
    }

    async registration(dto: CreateUserDto){
        const candidate = await this.userService.getUserByEmail(dto.email)
        console.log(candidate)
        if (candidate){
            throw new HttpException("User already exists", HttpStatus.BAD_REQUEST)            
        }
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.userService.createUser({...dto, password: hashPassword})
        return this.generateToken(user)
    }

    

    private async generateToken(user: User){
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            payload: this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: CreateUserDto){
            const user = await this.userService.getUserByEmail(dto.email)
            const passwordEquals = await bcrypt.compare(dto.password, user.password)
            if (user && passwordEquals) {
                return user
            }

            throw new UnauthorizedException({message: "uncorrect email or password"})
    }
}
