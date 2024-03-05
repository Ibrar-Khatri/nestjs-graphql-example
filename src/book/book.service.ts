import { Injectable } from '@nestjs/common';
import { BookEntity } from '../entity/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddBookInput, UpdateBookInput } from './book.resolver';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    public readonly bookRep: Repository<BookEntity>,
  ) {}

  async getAllBooks(): Promise<BookEntity[]> {
    const book = await this.bookRep.find({
      order: {
        id: 'DESC',
      },
    });
    return book;
  }

  async getBookById(id: number): Promise<BookEntity> {
    const book = await this.bookRep.findOne({
      where: {
        id,
      },
    });
    return book;
  }

  async deleteBookById(id: number): Promise<Boolean> {
    await this.bookRep.delete(id);
    return true;
  }

  async addBook(input: AddBookInput): Promise<BookEntity> {
    const book: BookEntity = new BookEntity();
    book.title = input.title;
    book.price = input.price;
    const createdBook: BookEntity = await this.bookRep.save(book);
    return createdBook;
  }

  async updateBook(input: UpdateBookInput): Promise<BookEntity> {
    const updatedBook: BookEntity = await this.bookRep.save(input);
    return updatedBook;
  }
}
