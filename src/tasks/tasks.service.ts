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


  async getTasksByFilter(filter: string, userId: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  if (filter === 'today') {
    return this.TaskRepo.find({
      where: {
        User: { id: userId },
        dueDate: today,
      },
    });
  }

  if (filter === 'tomorrow') {
    return this.TaskRepo.find({
      where: {
        User: { id: userId },
        dueDate: tomorrow,
      },
    });
  }

  if (filter === 'week') {
    return this.TaskRepo
      .createQueryBuilder('task')
      .where('task.userId = :userId', { userId })
      .andWhere('task.dueDate BETWEEN :today AND :nextWeek', {
        today,
        nextWeek,
      })
      .getMany();
  }

  // upcoming = after today
  return this.TaskRepo
    .createQueryBuilder('task')
    .where('task.userId = :userId', { userId })
    .andWhere('task.dueDate > :today', { today })
    .getMany();
}

}
