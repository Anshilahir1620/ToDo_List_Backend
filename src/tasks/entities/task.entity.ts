import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn,CreateDateColumn,} from 'typeorm';
import { TaskList } from 'src/task-lists/entities/task-list.entity';
import { User } from 'src/users/entities/user.entity';

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

@Entity('Tasks')
export class Task {

  @PrimaryGeneratedColumn()
  TaskID: number;

  @Column()
  ListID: number;

  @Column({ length: 150 })
  Title: string;

  @Column({ type: 'text', nullable: true })
  Description: string;

  @Column({
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.MEDIUM,
  })
  Priority: TaskPriority;

  @Column({ type: 'date', nullable: true })
  DueDate: Date;

  @Column({ nullable: true })
  AssignedTo: number;

  @Column()
  CreatedBy: number;

  @CreateDateColumn({ type: 'datetime' })
  CreatedAt: Date;

  @ManyToOne(() => TaskList, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ListID' })
  taskList: TaskList;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'AssignedTo' })
  assignedUser: User;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'CreatedBy' })
  createdUser: User;
}
