import { Injectable } from '@nestjs/common';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto';
import { UpdateTaskCommentDto } from './dto/update-task-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskComment } from './entities/task-comment.entity';
import { Repository } from 'typeorm';
import { retry } from 'rxjs';

@Injectable()
export class TaskCommentsService {
  constructor(
    @InjectRepository(TaskComment)
    private readonly TaskCommentRepo: Repository<TaskComment>
  ) { }

  create(createTaskCommentDto: CreateTaskCommentDto) {
    const comment = this.TaskCommentRepo.create(createTaskCommentDto);
    return this.TaskCommentRepo.save(comment);
  }

  findAll() {

    return this.TaskCommentRepo.find();
  }

  findOne(commentId: number) {
    return this.TaskCommentRepo.findOneBy({ commentId });
  }

  update(commentId: number, updateTaskCommentDto: UpdateTaskCommentDto) {
    return this.TaskCommentRepo.update(commentId, updateTaskCommentDto);
  }

  remove(commentId: number) {
    return this.TaskCommentRepo.delete(commentId);
  }

}
