import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';

@Entity('TaskLists')
export class TaskList {

  @PrimaryGeneratedColumn({ name: 'ListID' })
  listId: number;

  @Column({ name: 'ProjectID' })
  projectId: number;

  @Column({ name: 'ListName', length: 100 })
  listName: string;

  @Column({ name: 'Position' })
  position: number;

  @ManyToOne(() => Project, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ProjectID' })
  project: Project;
}
