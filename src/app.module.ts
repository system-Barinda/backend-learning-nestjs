import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgConfig } from './students/PgConfig';
import { StudentModule } from './students/studentModule.student';

@Module({
  imports: [
    TypeOrmModule.forRoot(PgConfig),
    StudentModule
  ],
})
export class AppModule {}