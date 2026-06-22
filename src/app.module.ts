import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './dbConfig';
import { UserModule } from './Users/UserModule.Users';
import { PersonModule } from './person/personModule.person';

@Module({
  imports: [
    TypeOrmModule.forRoot(pgConfig),
    UserModule,PersonModule
  ],
})
export class AppModule {}