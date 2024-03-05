import {
  Args,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';

@InputType()
export class AddBookInput {
  @Field()
  title: string;
  @Field(() => Int)
  price: number;
}

@InputType()
export class UpdateBookInput {
  @Field(() => Int)
  id: number;
  @Field()
  title: string;
  @Field(() => Int)
  price: number;
}

@Resolver((of) => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}
  //Queries and Mutations
  @Query((returns) => [Book])
  getAllBooks() {
    return this.bookService.getAllBooks();
  }
  @Query((returns) => Book, { nullable: true })
  getBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.getBookById(id);
  }
  @Mutation((returns) => Boolean)
  deleteBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.deleteBookById(id);
  }
  @Mutation((returns) => Book)
  addBook(@Args('input') input: AddBookInput) {
    const createdBook = this.bookService.addBook(input);
    return createdBook;
  }
  @Mutation((returns) => Book)
  updateBook(@Args('input') input: UpdateBookInput) {
    const updatedBook = this.bookService.updateBook(input);
    return updatedBook;
  }
}
