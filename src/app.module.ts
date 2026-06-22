import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './dbConfig';
import { UserModule } from './Users/UserModule.Users';

@Module({
  imports: [
    TypeOrmModule.forRoot(pgConfig),
    UserModule,
  ],
})
export class AppModule {}