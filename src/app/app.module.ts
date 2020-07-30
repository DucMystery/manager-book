import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './app/menu/menu.component';
import { SearchComponent } from './app/search/search.component';
import { GroupComponent } from './group/group.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { ReactiveFormsModule} from '@angular/forms';
import { EditBookComponent } from './books/edit-book/edit-book.component';
// import {BookPageComponent} from './books/book-page/book-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CategoriesComponent,
    MenuComponent,
    SearchComponent,
    GroupComponent,
    AddBookComponent,
    EditBookComponent,
    // BookPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
