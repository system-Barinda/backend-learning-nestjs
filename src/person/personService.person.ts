import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class PersonService {
    constructor(@InjectRepository(Person) private readonly personRepository:Repository<Person>){}

    async InsertData(){
        
    }
}