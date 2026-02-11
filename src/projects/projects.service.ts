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
    private readonly ProjectRepo : Repository<Project>
  ){ }



  create(createProjectDto: CreateProjectDto) {
    return this.ProjectRepo.save(createProjectDto);
  }

  findAll() {
    return this.ProjectRepo.find();
  }

  findOne(ProjectID: number) {
    return this.ProjectRepo.findOneBy({ProjectID})
  }

  update(ProjectID: number, updateProjectDto: UpdateProjectDto) {
    return this.ProjectRepo.update(ProjectID,updateProjectDto)
  }

  remove(ProjectID: number) {
    return this.ProjectRepo.delete(ProjectID);
    
  }
}
