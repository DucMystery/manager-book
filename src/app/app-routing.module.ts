import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from './books/add-book/add-book.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {EditBookComponent} from './books/edit-book/edit-book.component';

const routes: Routes = [
  {path: '',
  component:BookListComponent},
  {path:'create',
  component: AddBookComponent},
  {path:'edit/:id',
  component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
