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

  @PrimaryGeneratedColumn({ name: 'CommentID' })
  commentId: number;

  @Column({ name: 'TaskID' })
  taskId: number;

  @Column({ name: 'UserID' })
  userId: number;

  @Column({ name: 'CommentText', type: 'text' })
  commentText: string;

  @CreateDateColumn({ name: 'CreatedAt', type: 'datetime' })
  createdAt: Date;

  @ManyToOne(() => Task, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'TaskID' })
  task: Task;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserID' })
  user: User;
}
