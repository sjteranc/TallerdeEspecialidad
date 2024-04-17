import { IsEnum, IsNotEmpty, IsString, IsEmail, IsBoolean, } from 'class-validator';
import { ROLES } from 'src/constans/roles';
  
export class UserDTO {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    cellPhone: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEnum(ROLES)
    role: ROLES;

    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean;
}