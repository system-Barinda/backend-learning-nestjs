import { Controller,Get,Post,Body,UseInterceptors, } from "@nestjs/common";
import { UserService } from "./userService.interceptor";
import { TransformInterceptor } from './transform.interceptor'

@Controller("users")
@UseInterceptors(TransformInterceptor)
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get()
    getUser(){
        return this.userService.findAll();
    }
    @Post()
    Create(@Body() body){
    return this.userService.createUser(body);
    }
}