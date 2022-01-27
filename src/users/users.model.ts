import {Column, Model, DataType, Table, BelongsToMany} from "sequelize-typescript"
import {ApiProperty} from "@nestjs/swagger"
import { Role } from "src/roles/roles.model"
import { UserRoles } from "src/roles/user-roles.model"
interface UserCreationAttrs {
    email: string;
    password: string;
}
@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Uniq id'})    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number

    @ApiProperty({example: 'user@mail.ru', description: 'Email'})    
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: '123456', description: 'Password'})    
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: 'true', description: 'Banned'})    
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean

    @ApiProperty({example: 'for cheating', description: 'Ban reason'})    
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

} 
