import { Module } from '@nestjs/common';
import { UserService } from './Interceptor/userService.interceptor';
import { UserController } from './Interceptor/userController.Interceptor';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}