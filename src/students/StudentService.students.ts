import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./Entities/Student.Entity";
import { Repository } from "typeorm";
import { StudentDto } from "./StudentDto/student.StudentDto";

@Injectable()
export class StudentService {
  constructor( @InjectRepository(Student)  private readonly studentrepo: Repository<Student>){}

 
  async createStudent(studentDto: StudentDto | StudentDto[]): Promise<Student | Student[]> {
    try {
      if (Array.isArray(studentDto)) {
        const newStudents = this.studentrepo.create(studentDto);
        return await this.studentrepo.save(newStudents);
      }
      const newStudent = this.studentrepo.create(studentDto);
      return await this.studentrepo.save(newStudent);
    } 
    catch (error: unknown) {
      if ( typeof error === 'object' && error !== null && 'code' in error && (error as { code?: string }).code === '23505') 
      {
        throw new ConflictException('Registration number or email already exists.');
      }
      throw error;
    }
  }


  async findAllStudents(): Promise<Student[]> {
    return await this.studentrepo.find();
  }


  async findStudentById(id: number): Promise<Student> {
    const student = await this.studentrepo.findOneBy({ id });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }


  async updateStudent(id: number, updateData: Partial<StudentDto>): Promise<Student> {
    
    const student = await this.findStudentById(id); 
    const updatedStudent = this.studentrepo.merge(student, updateData);
    return await this.studentrepo.save(updatedStudent);
  }

  async deleteStudent(id: number): Promise<{ message: string }> {
    const result = await this.studentrepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return { message: `Student with ID ${id} successfully removed` };
  }
}