import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './app/menu/menu.component';
import { SearchComponent } from './app/search/search.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CategoriesComponent,
    MenuComponent,
    SearchComponent,
    GroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
