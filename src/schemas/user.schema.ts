import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSetting } from "./usersetting.schema";
import { Post } from "./post.schema";

@Schema()
export class User{
    @Prop()
    username:string

    @Prop()
    lastname?:string

    @Prop()
    age:number

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'UserSetting'})
    setting?:UserSetting

    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}]})
    Posts:Post[]

}

export const UserSchema = SchemaFactory.createForClass(User)