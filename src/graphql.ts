
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookInput {
    title: string;
    price: number;
}

export interface UpdateBookInput {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
}

export interface IQuery {
    getAllBooks(): Book[] | Promise<Book[]>;
    getBookById(bookId: number): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    deleteBookById(bookId: number): boolean | Promise<boolean>;
    addBook(input: AddBookInput): Book | Promise<Book>;
    updateBook(input: UpdateBookInput): Book | Promise<Book>;
}

type Nullable<T> = T | null;
