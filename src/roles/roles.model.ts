import {Column, Model, DataType, Table, BelongsToMany} from "sequelize-typescript"
import {ApiProperty} from "@nestjs/swagger"
import { User } from "src/users/users.model"
import { UserRoles } from "./user-roles.model"
interface RoleCreationAttrs {
    value: string;
    description: string;
}
@Table({
    tableName: 'roles'
})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'Uniq id'})    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number

    @ApiProperty({example: 'ADMIN', description: 'User Role'})    
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string

    @ApiProperty({example: 'site Administrator', description: 'Role Description'})    
    @Column({type: DataType.STRING, allowNull: false})
    description: string 

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
} 
