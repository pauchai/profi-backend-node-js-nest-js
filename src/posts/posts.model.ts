import {Column, Model, DataType, Table, BelongsToMany, BelongsTo, ForeignKey} from "sequelize-typescript"
import {ApiProperty} from "@nestjs/swagger"
import { STRING } from "sequelize/dist"
import { User } from "src/users/users.model"

interface PostCreationAttrs {
    title: string
    content: string
    userId: Number
    image: string
}
@Table({
    tableName: 'posts'
})
export class Post extends Model<Post, PostCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string

    @Column({type: DataType.STRING, allowNull: false})
    content: string 

    @Column({type: DataType.STRING})
    image: string

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number
    @BelongsTo(() => User)
    author: User
} 
