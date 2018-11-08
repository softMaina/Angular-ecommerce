import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorys$: Observable<Category[]>;

  constructor(public categService: CategoryService) { }

  ngOnInit() {
    this.categorys$ = this.categService.getAllCategories(ref=>ref);
    console.log(this.categorys$);
  }

}
