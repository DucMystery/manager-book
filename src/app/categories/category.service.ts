import { Injectable } from '@angular/core';
import {ICategory} from './icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: ICategory [] = [
    {
      id: 1,
      name: 'Tình cảm lãng mạn'
    },
    {
      id: 2,
      name: 'Tiểu Thuyết'
    },
    {
      id: 3,
      name: 'XXX'
    },
    {
      id: 4,
      name: 'Truyện ngắn'
    },
  ]

  constructor() { }
  getAll(): ICategory[] {
    return this.categories;
  }
}
