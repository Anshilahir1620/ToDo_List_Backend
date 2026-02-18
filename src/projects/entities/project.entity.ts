import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('Projects')
export class Project {

  @PrimaryGeneratedColumn({ name: 'ProjectID' })
  projectId: number;

  @Column({ name: 'ProjectName', length: 100 })
  projectName: string;

  @Column({ name: 'Description', length: 255, nullable: true })
  description: string;

  @Column({ name: 'CreatedBy' })
  createdBy: number;

  @CreateDateColumn({ name: 'CreatedAt', type: 'datetime' })
  createdAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'CreatedBy' })
  user: User;
}
