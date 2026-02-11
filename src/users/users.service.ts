import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly UserRepo: Repository<User>,
  ) { }


  create(createStudentDto: CreateUserDto) {
    return this.UserRepo.save(createStudentDto);
  }

  findAll() {
    return this.UserRepo.find();
  }

  findOne(UserID: number) {
    return this.UserRepo.findOneBy({ UserID });
  }

  update(id: number, data: Partial<User>) {
    return this.UserRepo.update(id, data);
  }

  remove(UserID: number) {
    return this.UserRepo.delete(UserID);
  }
}
