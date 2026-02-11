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

  @PrimaryGeneratedColumn()
  ProjectID: number;

  @Column({ length: 100 })
  ProjectName: string;

  @Column({ length: 255, nullable: true })
  Description: string;

  @Column()
  CreatedBy: number;

  @CreateDateColumn({ type: 'datetime' })
  CreatedAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'CreatedBy' })
  user: User;
}
