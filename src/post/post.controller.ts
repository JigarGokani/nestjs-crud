import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { createPostDto } from './dtos/createPostDto';

@Controller('post')
export class PostController {
    constructor(@Inject(PostService) private postService){}

    @Post()
    async createPost(@Body() createPostDto){
        return this.postService.createPost(createPostDto)
    }
}
