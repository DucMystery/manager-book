import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICategory} from '../../categories/icategory';
import {BookService} from '../book.service';
import {CategoryService} from '../../categories/category.service';
import {Router} from '@angular/router';
import {BookListComponent} from '../book-list/book-list.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addBookForm : FormGroup;
  categories: ICategory[];

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      id: ['',[Validators.required]],
      name: ['',[Validators.required]],
      author: ['',[Validators.required]],
      cate_id: ['']
    });
    this.categories = this.categoryService.getAll();
  }

  submit(){
    let data = this.addBookForm.value;
    data.cate_id = Number(data.cate_id);
    this.bookService.add(data);
    this.router.navigate(['']);
  }

}
