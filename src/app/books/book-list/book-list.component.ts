import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[] = [];

  getBookList() : IBook[] {
    const books =[
      {
        id: 1,
        name: 'Cong chua Be',
        author:'Tuan chua be'
      },
      {
        id: 2,
        name: 'Cong chua Be',
        author:'Tuan  be'
      },
      {
        id: 3,
        name: 'Tuan chua Be',
        author:'Tuan chua be be'
      },
      {
        id: 4,
        name: 'Anh chua Be',
        author:'Tuan'
      },

    ]
    return books;
  }

  constructor() { }

  ngOnInit(): void {
    this.books = this.getBookList();
  }

  search(event) {
    let keyword = event;
    this.books =(keyword) ? this.filterByKeyword(keyword) : this.getBookList();
  }

  private filterByKeyword(keyword) {
    return this.books.filter(book=>
    {return book.name.indexOf(keyword) != -1;})
  };

  delete(value) {
    let bookListDeleted =[];
    this.books.map(book => {
      if ((book.id) != value) {
        bookListDeleted.push(book);
    }
    })
    this.books = bookListDeleted;
  }
}
