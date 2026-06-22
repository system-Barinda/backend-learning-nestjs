import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!:number;


  @Column()
  name!:string;

  @Column()
  description!:string;

  @Column({default:0})
  price!:number;



}


@Entity()
export class Person {
  @PrimaryColumn()
  id!:number;


  @Column()
  name!:string;

 @Column()
location!: string;
}

