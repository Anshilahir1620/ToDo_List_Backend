import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateTaskListDto {

  @IsInt()
  @Min(1)
  projectId: number;

  @IsNotEmpty()
  @IsString()
  listName: string;
}
