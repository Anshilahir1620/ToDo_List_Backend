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
    private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const user = this.userRepo.create({
      username: dto.username,
      email: dto.email,
      passwordHash: dto.password, // ⚠️ plain password
    });

    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(userId: number) {
    return this.userRepo.findOneBy({ userId });
  }

  update(userId: number, data: Partial<User>) {
    return this.userRepo.update(userId, data);
  }

  remove(userId: number) {
    return this.userRepo.delete(userId);
  }

  findByUsername(username: string) {
    return this.userRepo.findOne({
      where: { username },
    });
  }
}
