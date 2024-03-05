import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    public readonly userRep: Repository<UserEntity>,
  ) {}

  async findUserByEmail(email: string) {
    const user: UserEntity = await this.userRep.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}
