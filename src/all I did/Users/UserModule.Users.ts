import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService.Users';
import { Usercontroller } from './Controller.Users';
import { User } from 'src/all I did/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [Usercontroller],
  providers: [UserService],
})
export class UserModule {}