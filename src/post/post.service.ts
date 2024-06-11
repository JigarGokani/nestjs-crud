import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from 'src/schemas/post.schema';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel,
        @InjectModel(User.name) private userModel
    ){}

    async createPost({userId,...createPostDto}){
        // const user = await this.userModel.findById(userId)
        
        // if(!user) throw new HttpException("User not found",404)
        const newPost = await this.postModel.create(createPostDto)
    console.log("yha tak1")

        const updatedUser= await this.userModel.findByIdAndUpdate(userId,({$push:{
            posts:newPost._id
        }}))
        console.log("yha tak2")
        return updatedUser;
        
    }


}
