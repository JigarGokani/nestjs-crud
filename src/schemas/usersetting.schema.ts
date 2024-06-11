import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsOptional } from "class-validator";

@Schema()
export class UserSetting{

    @Prop()
    @IsOptional()
    receivenotifications?:boolean;

    @Prop()
    @IsOptional()
    receivemail?:boolean;

    @Prop()
    @IsOptional()
    receiveSMS?:boolean;

}

export const UserSettingSchema = SchemaFactory.createForClass(UserSetting)