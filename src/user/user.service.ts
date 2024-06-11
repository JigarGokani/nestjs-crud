import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { createUserDto } from './dtos/createUserDto';
import { updateUserDto } from './dtos/updateUserDto';
import { UserSetting } from './schemas/usersetting.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)private userModel,
        @InjectModel(UserSetting.name)private userSetting
    ){}

    async createUser({ setting, ...createUserDto }: createUserDto) {
        if (setting) {
            const newSettings = await this.userSetting.create(setting);
            const res = await this.userModel.create({ ...createUserDto,setting: newSettings._id });
            return res;
        }
        const newUser = await this.userModel.create(createUserDto);
        return newUser;
    }

    async getUser(){
        const res = await this.userModel.find().populate("setting")
        return res;
    }

    async getUserById(id){
        const user = await this.userModel.findById(id)
        return user;
    }


    async updateUserById(id,updateUserDto:updateUserDto){
        const user = await this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true})
        return user;

    }


    async deleteUserById(id){
        const user = await this.userModel.findByIdAndDelete(id)
        return user;
    }

}
