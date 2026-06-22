import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Person,User } from "src/all I did/entities/user.entity";
import { PersonController } from "./personController.person";
import { PersonService } from "./personService.person";

@Module({
    imports:[TypeOrmModule.forFeature([User,Person])],
    controllers:[PersonController],
    providers:[PersonService]
})

export class PersonModule {}