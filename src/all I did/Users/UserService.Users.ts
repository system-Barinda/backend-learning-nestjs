import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/all I did/Dto/CreateUserDto.Dto";
import { User } from "src/all I did/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository:Repository<User>,){}

    async createUser(users:CreateUserDto){
        const user = this.userRepository.create(users);
        return this.userRepository.save(user)
    }

}
