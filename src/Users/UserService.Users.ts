import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>,
    ){}


    async createUser(){
        const user = this.userRepository.create({
            name:"barinda system sylvere",
            description:"ddkjakjd;ajdflakjdfaljfaljdfkadfkjakdjadjfkdjajkda",
            price:1200
        });
        return this.userRepository.save(user)
    }

}