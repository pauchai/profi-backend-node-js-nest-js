import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService){}

    @Post()
    @UseInterceptors(FileInterceptor("image"))
    createPost(@Body() dto: CreatePostDto,
        @UploadedFile() image: Express.Multer.File
    ){
        return this.postsService.create(dto, image)
    }
}
