import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';

@Resolver((of) => Book)
export class BookResolver {
  //if we need to modify the query name getAllBooks to "books"
  @Query((returns) => [Book], { name: 'books' })
  getAllBooks() {
    // const boks:Book =
    return [
      {
        id: 1,
        title: 'Harry Potter',
        price: 500,
      },
      {
        id: 2,
        title: 'Harry Potter',
        price: 600,
      },
      {
        id: 3,
        title: 'Harry Potter',
        price: 700,
      },
    ];
  }
}
