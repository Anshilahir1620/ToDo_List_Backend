import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { TaskList } from 'src/task-lists/entities/task-list.entity';
import { User } from 'src/users/entities/user.entity';

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export enum TaskStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
}

@Entity('Tasks')
export class Task {

  @PrimaryGeneratedColumn({ name: 'TaskID' })
  taskId: number;

  @Column({ name: 'ListID' })
  listId: number;

  @Column({ name: 'Title', length: 150 })
  title: string;

  @Column({ name: 'Description', type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  Status: TaskStatus;

  @Column({
    name: 'Priority',
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.MEDIUM,
  })
  priority: TaskPriority;

  @Column({ name: 'DueDate', type: 'date', nullable: true })
  dueDate: Date;

  @Column({ name: 'AssignedTo', nullable: true })
  assignedTo: number;

  @Column({ name: 'CreatedBy' })
  createdBy: number;

  @CreateDateColumn({ name: 'CreatedAt', type: 'datetime' })
  createdAt: Date;

  @ManyToOne(() => TaskList, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ListID' })
  taskList: TaskList;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'CreatedBy' })
  createdUser: User;
}
