import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn,} from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';

@Entity('TaskLists')
export class TaskList {

  @PrimaryGeneratedColumn()
  ListID: number;

  @Column()
  ProjectID: number;

  @Column({ length: 100 })
  ListName: string;

  @Column()
  Position: number;

  @ManyToOne(() => Project, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ProjectID' })
  project: Project;
}
