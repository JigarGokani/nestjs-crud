import { IsNotEmpty, IsNumber, IsOptional, IsString, isNotEmpty, isString } from "class-validator"

export class updateUserDto{
    @IsOptional()
    @IsString()
    username:string

    @IsOptional()
    @IsString()
    lastname:string

    @IsOptional()
    @IsNumber()
    age:number
}