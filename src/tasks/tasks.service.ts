import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { retry } from 'rxjs';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private readonly TaskRepo :Repository<Task>
  ){ }


  create(createTaskDto :CreateTaskDto)
  {
    return this.TaskRepo.save(createTaskDto)
  }

  findAll() {
    return this.TaskRepo.find();
  }

  findOne(TaskID: number) {
    return this.TaskRepo.findOneBy({TaskID});
  }

  update(TaskID:number, updateTaskDto:UpdateTaskDto) {
    return this.TaskRepo.update(TaskID,updateTaskDto)
  }
  
  remove(TaskID: number) {
    return this.TaskRepo.delete(TaskID)
  }
}
