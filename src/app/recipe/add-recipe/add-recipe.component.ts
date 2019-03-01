import { Recipe } from './../model/recipe.model';
import { RecipeService } from './../recipe.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  INITIAL_STATE = 'initial_state'
  ADD_SUCCESS_STATE = 'add_success_state'
  ADD_ERROR_STATE = 'add_error_state'
  ADD_LOADING_STATE = 'add_loading_state'

  viewState: String;

  @Output()
  formChange = new EventEmitter()

  @Input()
  recipe: Recipe

  constructor(private router: Router, private recipeService: RecipeService) { }


  ngOnInit() {
    this.viewState = this.INITIAL_STATE;
    this.recipe = (this.recipe || new Recipe(0, ""))
  }

  onSave(recipe: Recipe) {
    this.recipeService.addRecipe(recipe).subscribe(resp => this.viewState = this.ADD_SUCCESS_STATE,
      error => this.viewState = this.ADD_ERROR_STATE)

    this.router.navigate(['/'])
  }


  NAME_FIELD_VALUE_NAME = "name";

  onFieldChange(event) {

    this.recipe.setName(event.valueName === this.NAME_FIELD_VALUE_NAME ? event.value : this.recipe.getName())

    this.formChange.emit({
      isValid: true,
      value: this.recipe
    })
  }
}


}
