import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Post{

    @Prop({required:true})
    title:string

    @Prop({required:true})
    description:string

    @Prop()
    userId:string
}

export const postSchema = SchemaFactory.createForClass(Post)