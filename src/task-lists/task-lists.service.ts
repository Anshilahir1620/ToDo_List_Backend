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
  private readonly TasklistRepo : Repository<TaskList>
){}


  create(createTaskListDto: CreateTaskListDto) {
    return this.TasklistRepo.save(createTaskListDto)
  }

  findAll() {
    return this.TasklistRepo.find();
  }

  findOne(ListID: number) {
    return this.TasklistRepo.findOneBy({ListID})
  }


  update(ListID: number, updateTaskListDto: UpdateTaskListDto) {

    return this.TasklistRepo.update(ListID,updateTaskListDto)

  }

  remove(ListID:number) {

      return this.TasklistRepo.delete(ListID);
  }
}
