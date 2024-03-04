import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
  public booksData: BookEntity[] = [];

  addBook(book: BookEntity): BookEntity {
    this.booksData.push(book);
    return book;
  }

  updateBook(id: number, updatedBook: BookEntity): BookEntity {
    this.booksData = this.booksData.map((book: BookEntity) =>
      book.id == id ? updatedBook : book,
    );
    return {
      id,
      ...updatedBook,
    };
  }

  findAllBooks(): BookEntity[] {
    return this.booksData;
  }

  getBookById(id: number): BookEntity {
    return this.booksData.find((book: BookEntity) => book.id == id);
  }
  deleteBookById(id: number) {
    this.booksData = this.booksData.filter(
      (book: BookEntity) => book.id !== id,
    );
    return true;
  }
}
