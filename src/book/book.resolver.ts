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
class AddBookInput {
  @Field(() => Int)
  id: number;
  @Field()
  title: string;
  @Field(() => Int)
  price: number;
}

@InputType()
class UpdateBookInput {
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
  getAllBooks(): any {
    return this.bookService.findAllBooks();
  }

  @Query((returns) => Book, { nullable: true })
  getBookById(@Args({ name: 'bookId', type: () => Int }) id: number): any {
    return this.bookService.getBookById(id);
  }

  @Mutation((returns) => Boolean)
  deleteBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): Boolean {
    return this.bookService.deleteBookById(id);
  }

  @Mutation((returns) => Book)
  addBook(@Args('input') addBookInput: AddBookInput): Book {
    console.log('🚀 ~ BookResolver ~ addBook ~ addBookInput:', addBookInput);
    const createdBook = this.bookService.addBook(addBookInput);
    console.log('🚀 ~ BookResolver ~ addBook ~ createdBook:', createdBook);
    return createdBook;
  }

  @Mutation((returns) => Book)
  updateBook(
    @Args('input') updateBookInput: UpdateBookInput,
    @Args('id') id: number,
  ): Book {
    console.log('🚀 ~ BookResolver ~ updateBookInput:', updateBookInput);
    const updatedBook = this.bookService.updateBook(id, updateBookInput);
    console.log('🚀 ~ BookResolver ~ addBook ~ updatedBook:', updatedBook);
    return updatedBook;
  }
}
