import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {CategoryService} from '../../categories/category.service';
import {BookService} from '../book.service';
import {ICategory} from '../../categories/icategory';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[];
  categories: ICategory[];
  page: number =1;


  constructor(private categoryService: CategoryService,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
    this.categories = this.categoryService.getAll();

  }

  search(event) {
    let keyword = event;
    this.books =(keyword) ? this.filterByKeyword(keyword) : this.bookService.getAll();
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
