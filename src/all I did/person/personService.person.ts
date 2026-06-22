import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertDataDto } from "src/all I did/Dto/InsertDataDto.Dto";
import { UpdatePersonDto } from "src/all I did/Dto/UpdatePersonDto";
import { Person } from "src/all I did/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class PersonService {
    constructor(@InjectRepository(Person) private readonly personRepository:Repository<Person>){}

    async InsertData(person:InsertDataDto){
      const per = await this.personRepository.create(person);
      return this.personRepository.save(per);
    }

    async updateData(id:number,person:UpdatePersonDto){
      const data1 = await this.personRepository.findOneBy({id});
      if(!data1) {
        throw new Error("Person not found");
      }
    
       Object.assign(data1,person)
      await this.personRepository.save(person)
    }

    async DeleteData(id:number){
      const data1 = await this.personRepository.findOneBy({id});
      if(!data1) {
        throw new Error("Person not found");
      }
    
      await this.personRepository.delete(id)
    }

}