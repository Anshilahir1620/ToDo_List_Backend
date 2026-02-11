import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,OneToMany,} from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';

@Entity('Users')
export class User {

  @PrimaryGeneratedColumn({ name: 'UserID' })
  UserID: number;

  @Column({
    name: 'UserName',
    type: 'varchar',
    length: 50,
    unique: true,
  })
  UserName: string;

  @Column({
    name: 'Email',
    type: 'varchar',
    length: 100,
    unique: true,
  })
  Email: string;

  @Column({
    name: 'PasswordHash',
    type: 'varchar',
    length: 255,
  })
  PasswordHash: string;

  @CreateDateColumn({
    name: 'CreatedAt',
    type: 'datetime',
  })
  CreatedAt: Date;

  @OneToMany(() => Project, project => project.user)
  projects: Project[];
}
