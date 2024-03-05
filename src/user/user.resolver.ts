import {
  Args,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { UserEntity } from 'src/entity/user.entity';

@Resolver((of) => UserEntity)
export class UserResolver {}
