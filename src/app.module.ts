import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './book/book.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      //this approach use for schema first
      // typePaths: [''],

      //this approach use for code first
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      //when we need to create interface for resolver
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
