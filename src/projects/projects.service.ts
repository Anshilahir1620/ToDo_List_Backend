import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectRepository(Project)
    private readonly ProjectRepo: Repository<Project>
  ) { }



  create(createProjectDto: CreateProjectDto) {
    const project = this.ProjectRepo.create(createProjectDto);
    return this.ProjectRepo.save(project);
  }

  findAll() {
    return this.ProjectRepo.find();
  }

  findOne(projectId: number) {
    return this.ProjectRepo.findOneBy({ projectId });
  }

  update(projectId: number, updateProjectDto: UpdateProjectDto) {
    return this.ProjectRepo.update(projectId, updateProjectDto);
  }

  remove(projectId: number) {
    return this.ProjectRepo.delete(projectId);
  }
}
