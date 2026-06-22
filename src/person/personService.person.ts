import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertDataDto } from "src/Dto/InsertDataDto.Dto";
import { Person } from "src/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class PersonService {
    constructor(@InjectRepository(Person) private readonly personRepository:Repository<Person>){}

    async InsertData(person:InsertDataDto){
      const per = await this.personRepository.create(person);
      return this.personRepository.save(per);
    }
}