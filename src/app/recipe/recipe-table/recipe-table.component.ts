import { Recipe } from './../model/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.css']
})
export class RecipeTableComponent implements OnInit {

  @Input()
  recipes: Recipe[] = []

  constructor() { }

  ngOnInit() {
  }

}
