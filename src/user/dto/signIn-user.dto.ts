import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator'; 

export class SignInUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(6)
  @MaxLength(32)
  password: string;
}
