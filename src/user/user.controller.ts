import { Body, Controller, Delete, Get, HttpException, Inject, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dtos/createUserDto';
import mongoose from 'mongoose';
import { updateUserDto } from './dtos/updateUserDto';

@Controller('user')
export class UserController {
    constructor(@Inject(UserService)private userService:UserService){}

    @Post('post')
    createUser(@Body() createUserDto: createUserDto) {
        console.log(createUserDto);
        return this.userService.createUser(createUserDto);
    }

    @Get()
    getUser(){
        return this.userService.getUser()
    }

    @Get(":id")
    getUserById(@Param('id') id){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException(`User with ${id} not found!`,404)
        const user = this.userService.getUserById(id)
        if(!user) throw new HttpException(`User with ${id} not found!`,404)
        return user;
        }

    @Patch(":id")
    updateUserById(@Param("id") id ,@Body() updateUserDto:updateUserDto){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException(`User with ${id} not found!`,404)
        return this.userService.updateUserById(id,updateUserDto) 
       }

    @Delete(":id")
    deleteUserByiD(@Param("id") id){
        return this.userService.deleteUserById(id)
    }
}
