import { Recipe } from './../recipe/model/recipe.model';
import { RecipeService } from './../recipe/recipe.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SEARCH_ITEMS_VALUE_NAME = 'search_items'
  EMPTY_SEARCH_BAR_STATE = 'empty_search_bar'
  SEARCH_LOADING_STATE = 'search_load'
  SEARCH_MATCH_STATE = 'search_match'
  SEARCH_NO_MATCH_STATE = 'search_no_match'
  SEARCH_ERROR_STATE = 'search_error'

  recipes: Recipe[] = []
  viewState = this.EMPTY_SEARCH_BAR_STATE

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSearch(event) {
    if (event.value == '') {
      this.viewState = this.EMPTY_SEARCH_BAR_STATE
    } else {
      this.viewState = this.SEARCH_LOADING_STATE
      this.recipeService.searchRecipe(event.value).subscribe(
        recipes => {
          this.recipes = recipes;
          this.viewState = this.recipes.length > 0 ?
            this.SEARCH_MATCH_STATE : this.SEARCH_NO_MATCH_STATE
        },
        error => this.viewState = this.SEARCH_ERROR_STATE)
    }
  }
}
