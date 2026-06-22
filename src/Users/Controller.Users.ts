import { Body,Controller,Post } from "@nestjs/common";
import { UserService } from "./UserService.Users";
import { CreateUserDto } from "src/Dto/CreateUserDto.Dto";

@Controller("users")
export class Usercontroller {
    constructor(private readonly userService:UserService){}

    @Post()
    create(@Body() user:CreateUserDto){
        return this.userService.createUser(user);
    }
}