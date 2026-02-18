import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';

@Entity('Users')
export class User {

  @PrimaryGeneratedColumn({ name: 'UserID' })
  userId: number;

  @Column({ name: 'UserName', length: 50, unique: true })
  username: string;

  @Column({ name: 'Email', length: 100, unique: true })
  email: string;

  @Column({ name: 'PasswordHash', length: 255 })
  passwordHash: string; // ⚠️ plain password for now

  @CreateDateColumn({ name: 'CreatedAt', type: 'datetime' })
  createdAt: Date;

  @OneToMany(() => Project, project => project.user)
  projects: Project[];
}
