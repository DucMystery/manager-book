import { Component, OnInit } from '@angular/core';
import {ICategory} from './icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: ICategory[]=[
    {
      id:1,
      name:'Kiem Hiep'
    },
    {
      id:2,
      name:'Tieu Thuyet'
    },{
      id:3,
      name:'Tinh cam Lang Man'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
