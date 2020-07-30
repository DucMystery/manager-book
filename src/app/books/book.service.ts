import { Injectable } from '@angular/core';
import {IBook} from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: IBook[] = [
    {
      id: 1,
      name: 'Cong chua Be',
      cate_id: 1,
      author:'Tuan chua be'
    },
    {
      id: 2,
      name: 'Cong chua Be',
      cate_id: 1,
      author:'Tuan  be'
    },
    {
      id: 3,
      name: 'Tuan chua Be',
      cate_id: 2,
      author:'Tuan chua be be'
    },
    {
      id: 4,
      name: 'Anh chua Be',
      cate_id: 2,
      author:'Tuan'
    },    {
      id: 5,
      name: 'Anh chua Be',
      cate_id: 2,
      author:'Tuan'
    },
    {
      id: 6,
      name: 'Anh chua Be',
      cate_id: 2,
      author:'Tuan'
    },
    {
      id: 7,
      name: 'Anh chua Be',
      cate_id: 2,
      author:'Tuan'
    },
    {
      id: 5,
      name: 'Anh chua Be',
      cate_id: 2,
      author:'Tuan'
    },

  ]

  constructor() { }
  getAll(): IBook[] {
    return this.books;
  }

  add(book:IBook) : void {
    this.books.push(book);
  }
}
