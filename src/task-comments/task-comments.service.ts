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
  ){}

  create(createTaskCommentDto: CreateTaskCommentDto) {

    return this.TaskCommentRepo.save(createTaskCommentDto);
  }

  findAll() {

    return this.TaskCommentRepo.find();
  }

  findOne(CommentID: number) {
    return this.TaskCommentRepo.findOneBy({CommentID});
  }

  update(CommentID: number, updateTaskCommentDto: UpdateTaskCommentDto) {

    return this.TaskCommentRepo.update(CommentID,updateTaskCommentDto)

  }

  remove(CommentID: number) {

    return this.TaskCommentRepo.delete(CommentID);

  }
}
