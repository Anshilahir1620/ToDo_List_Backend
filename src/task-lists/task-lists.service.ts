import { Injectable } from '@nestjs/common';
import { CreateTaskListDto } from './dto/create-task-list.dto';
import { UpdateTaskListDto } from './dto/update-task-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskList } from './entities/task-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskListsService {

  constructor(
    @InjectRepository(TaskList)
    private readonly TasklistRepo: Repository<TaskList>
  ) { }


  create(createTaskListDto: CreateTaskListDto) {
    const list = this.TasklistRepo.create(createTaskListDto);
    return this.TasklistRepo.save(list);
  }

  findAll() {
    return this.TasklistRepo.find();
  }

  findOne(listId: number) {
    return this.TasklistRepo.findOneBy({ listId });
  }

  update(listId: number, updateTaskListDto: UpdateTaskListDto) {
    return this.TasklistRepo.update(listId, updateTaskListDto);
  }

  remove(listId: number) {
    return this.TasklistRepo.delete(listId);
  }

  


}
