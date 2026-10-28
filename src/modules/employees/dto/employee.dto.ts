import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  position!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  salary!: number;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsString()
  phone?: string;
}

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  position?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  salary?: number;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
