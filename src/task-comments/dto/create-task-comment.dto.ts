import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateTaskCommentDto {

  @IsInt()
  @Min(1)
  TaskID: number;

  @IsInt()
  @Min(1)
  UserID: number;

  @IsNotEmpty()
  @IsString()
  CommentText: string;
}
