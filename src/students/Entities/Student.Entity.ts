import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'students' })
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Column({
    name: 'registration_number',
    type: 'varchar',
    unique: true,
  })
  registrationNumber!: string;

  @Column({ type: 'varchar', nullable: true })
  department?: string;
}