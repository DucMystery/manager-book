import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICategory} from '../../categories/icategory';
import {IBook} from '../ibook';
import {BookService} from '../book.service';
import {CategoryService} from '../../categories/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editBookForm: FormGroup;
  categories: ICategory[];
  id: number;
  book: IBook;

  constructor(private fb : FormBuilder,
              private bookService: BookService,
              private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const id = paramMap.get('id');
      this.id= +id;
      this.book=this.getBook(id);
      console.log(this.book);
    })
  }

  ngOnInit(): void {
    this.editBookForm = this.fb.group({
      id: [this.book.id,[Validators.required]],
      name: [this.book.name,[Validators.required]],
      author: [this.book.author,[Validators.required]],
      cate_id: [this.book.cate_id]
    })
    this.categories = this.categoryService.getAll();
  }
  getBook(id): IBook{
    for(let book of this.bookService.getAll()){
      if(book.id==id){
        return book;
      }
    }
  }

  submit() {
    let data = this.editBookForm.value;
    this.book.id = Number(data.id);
    this.book.name=data.name;
    this.book.author=data.author;
    this.book.cate_id=data.cate_id;
    this.router.navigate([''])
  }


  get name() {
    return this.editBookForm.get('name');
  }

  get author() {
    return this.editBookForm.get('author');
  }

}
