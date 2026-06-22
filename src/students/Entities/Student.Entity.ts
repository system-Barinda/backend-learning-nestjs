import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'students' }) 
export class Student {
  @PrimaryGeneratedColumn() 
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ name: 'registration_number', unique: true })
  registrationNumber!: string;

  @Column({ nullable: true })
  department?: string;
}