import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateTaskCommentDto {

  @IsInt()
  @Min(1)
  taskId: number;

  @IsInt()
  @Min(1)
  userId: number;

  @IsNotEmpty()
  @IsString()
  commentText: string;
}
