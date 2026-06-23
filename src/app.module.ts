import { Module } from '@nestjs/common';
import { UserService } from './Interceptor/userService.interceptor';

@Module({
  imports: [
    UserService
  ],
})
export class AppModule {}