import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateProjectDto {

  @IsNotEmpty()
  @IsString()
  projectName: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  @Min(1)
  createdBy: number;
}
