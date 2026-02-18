import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  Min,
  IsDateString,
} from 'class-validator';

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export enum TaskStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
}

export class CreateTaskDto {

  @IsInt()
  @Min(1)
  listId: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  assignedTo?: number;

  @IsOptional()
  @IsEnum(TaskStatus)
  Status?: TaskStatus;

  @IsInt()
  @Min(1)
  createdBy: number;
}
