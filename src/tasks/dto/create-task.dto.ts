import {IsInt,IsNotEmpty,IsOptional,IsString,IsEnum,Min,IsDateString,} from 'class-validator';

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export class CreateTaskDto {

  @IsInt()
  @Min(1)
  ListID: number;

  @IsNotEmpty()
  @IsString()
  Title: string;

  @IsOptional()
  @IsString()
  Description?: string;

  @IsOptional()
  @IsEnum(TaskPriority)
  Priority?: TaskPriority;

  @IsOptional()
  @IsDateString()
  DueDate?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  AssignedTo?: number;

  @IsInt()
  @Min(1)
  CreatedBy: number;
}
