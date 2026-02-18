import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task, TaskStatus } from './entities/task.entity';
import { Repository, Between } from 'typeorm';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private readonly TaskRepo: Repository<Task>
  ) {}

  create(dto: CreateTaskDto) {
    const task = this.TaskRepo.create(dto);
    return this.TaskRepo.save(task);
  }

  findAll() {
    return this.TaskRepo.find();
  }

  findOne(taskId: number) {
    return this.TaskRepo.findOneBy({ taskId });
  }

  update(taskId: number, dto: UpdateTaskDto) {
    return this.TaskRepo.update(taskId, dto);
  }

  remove(taskId: number) {
    return this.TaskRepo.delete(taskId);
  }

  async getTasksByFilter(filter: string, userId: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const endToday = new Date(today);
    endToday.setHours(23, 59, 59, 999);

    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const qb = this.TaskRepo.createQueryBuilder('task')
      .where('task.CreatedBy = :userId', { userId });

    if (filter === 'today') {
      qb.andWhere('task.DueDate BETWEEN :start AND :end', {
        start: today,
        end: endToday,
      });
    }

    if (filter === 'tomorrow') {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      qb.andWhere('task.DueDate = :tomorrow', { tomorrow });
    }

    if (filter === 'week') {
      qb.andWhere('task.DueDate BETWEEN :today AND :nextWeek', {
        today,
        nextWeek,
      });
    }

    return qb.orderBy('task.DueDate', 'ASC').getMany();
  }

  async getTodayTasks(userId: number) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const tasks = await this.TaskRepo.find({
      where: {
        assignedTo: userId,
        dueDate: Between(start, end),
      },
      order: {
        createdAt: 'ASC',
      },
    });

    return {
      pending: tasks.filter(t => t.Status === TaskStatus.PENDING),
      completed: tasks.filter(t => t.Status === TaskStatus.COMPLETED),
    };
  }
}
