import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested, isNotEmpty, isString } from "class-validator"

export class createUserSetting{
    @IsOptional()
    @IsBoolean()
    receivenotifications?:boolean

    @IsOptional()
    @IsBoolean()
    receivemail?:boolean

    @IsOptional()
    @IsBoolean()
    receiveSMS?:boolean
}

export class createUserDto{
    @IsNotEmpty()
    @IsString()
    username:string

    @IsOptional()
    @IsString()
    lastname:string

    @IsNumber()
    age:number

    @IsOptional()
    @ValidateNested()
    setting?:createUserSetting

}