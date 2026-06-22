import { Controller, Post, Get, Put, Delete, Body, Param, ParseIntPipe, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StudentService } from './StudentService.students';
import { StudentDto } from './StudentDto/student.StudentDto'
import { Student } from './Entities/Student.Entity';

@ApiTags('Students') 
@Controller('students') 
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new student' })
  @ApiResponse({ status: 21, description: 'The student has been successfully created.', type: Student })
  @ApiResponse({ status: 409, description: 'Registration number or email already exists.' })
  async create(@Body() studentDto: StudentDto): Promise<Student | Student[]> {
    return await this.studentService.createStudent(studentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all students' })
  @ApiResponse({ status: 200, description: 'List of all students returned successfully.', type: [Student] })
  async findAll(): Promise<Student[]> {
    return await this.studentService.findAllStudents();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a student by ID' })
  @ApiResponse({ status: 200, description: 'Student record found.', type: Student })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return await this.studentService.findStudentById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing student record' })
  @ApiResponse({ status: 200, description: 'Student successfully updated.', type: Student })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<StudentDto>,
  ): Promise<Student> {
    return await this.studentService.updateStudent(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a student record' })
  @ApiResponse({ status: 200, description: 'Student successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return await this.studentService.deleteStudent(id);
  }
}