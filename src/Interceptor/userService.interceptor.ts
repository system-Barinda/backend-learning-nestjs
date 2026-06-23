import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    private users = [
             { id: 1, name: 'John' },
             { id: 2, name: 'Alice' },
    ];

    async findAll(){
        return this.users;
    }
    

    async createUser(user:any){
        this.users.push(user);
        return this.users;
    }
}