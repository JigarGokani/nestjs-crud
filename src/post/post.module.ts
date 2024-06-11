import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, postSchema } from 'src/schemas/post.schema';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:Post.name,
      schema:postSchema
    },
    {
      name:User.name,
      schema:UserSchema
    }
  ])],
  providers: [PostService],
  controllers:[PostController]
})
export class PostModule {}
