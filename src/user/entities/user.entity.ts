import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  @OneToOne(() => User)
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

 
}
