import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('TaskComments')
export class TaskComment {

  @PrimaryGeneratedColumn()
  CommentID: number;

  @Column()
  TaskID: number;

  @Column()
  UserID: number;

  @Column({ type: 'text' })
  CommentText: string;

  @CreateDateColumn({ type: 'datetime' })
  CreatedAt: Date;

  @ManyToOne(() => Task, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'TaskID' })
  task: Task;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserID' })
  user: User;
}
