import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import * as jwt from 'jsonwebtoken';

@Resolver((of) => String)
export class AppResolver {
  @Query((returns) => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: UserEntity,
  ): string {
    return jwt.sign(user, 'key', { expiresIn: '60s' });
  }
}
