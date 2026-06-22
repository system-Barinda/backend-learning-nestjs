import { Module,NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './StudentController.student';
import { StudentService } from './StudentService.students';
import { Student } from './Entities/Student.Entity';
import { LoggerMiddleware } from "./middleware/logger.middleware";

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [ StudentController],
  providers: [StudentService],
  exports: [StudentService]
})

export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware ).forRoutes(StudentController);
  }
}