import { IsNumber, IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StudentDto {
  @ApiProperty({ description: 'The unique identifier of the student' })
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @ApiProperty({ example: 'John Doe', description: 'Full name of the student' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'Institutional email address' })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ example: '24RP08563', description: 'Student registration number' })
  @IsString()
  @IsNotEmpty()
  registrationNumber!: string;

  @ApiProperty({ example: 'Computer Science', description: 'Enrolled department or course', required: false })
  @IsString()
  @IsOptional()
  department?: string;
}