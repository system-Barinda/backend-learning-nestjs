import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './StudentController.student';
import { StudentService } from './StudentService.students';
import { Student } from './Entities/Student.Entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [ StudentController],
  providers: [StudentService],
  exports: [StudentService]
})
export class StudentModule {}