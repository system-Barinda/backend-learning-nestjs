import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./Entities/Student.Entity";
import { Repository } from "typeorm";

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly studentrepo:Repository<Student>){}

    
}