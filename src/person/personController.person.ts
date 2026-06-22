import { Controller,Body,Post, Patch, Param } from "@nestjs/common";
import { PersonService } from "./personService.person";
import { Person } from "src/entities/user.entity";
import { InsertDataDto } from "src/Dto/InsertDataDto.Dto";
import { UpdatePersonDto } from "src/Dto/UpdatePersonDto";

@Controller("person")
export class PersonController {
    constructor(private readonly personService:PersonService){}

    @Post("/add")
    createData(@Body() person:InsertDataDto){
    
        return this.personService.InsertData(person);
    }

    @Patch(":id")
    update(@Param('id') id:string, @Body() body:UpdatePersonDto){
    return this.personService.updateData(+id,body)
    }

}