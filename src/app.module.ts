import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/crudapp"),
    PostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
