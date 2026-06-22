import { Controller,Body,Post } from "@nestjs/common";
import { PersonService } from "./personService.person";
import { Person } from "src/entities/user.entity";
import { InsertDataDto } from "src/Dto/InsertDataDto.Dto";

@Controller("person")
export class PersonController {
    constructor(private readonly personService:PersonService){}

    @Post("/add")
    createData(@Body() person:InsertDataDto){
    
        return this.personService.InsertData(person);
    }

}