import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './model/recipe.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiUrl = 'http://localhost:8080';
  endpoint = 'recipes';
  serializer = new RecipeSerializer();

  constructor(private http: HttpClient) {
  }

  searchRecipe(term: string) {
    return this.http.get<Recipe>(`${this.apiUrl}/${this.endpoint}/search?name=${term}`)
      .pipe(
        map((response: any) => {
          return response.map(recipeJson => this.serializer.fromJson(recipeJson))
        })
      )
  }

  addRecipe(recipe: Recipe) {
    return this.http.post(`${this.apiUrl}/${this.endpoint}`, this.serializer.toJson(recipe))
  }

  editRecipe(id: number) {
    return this.http.get<Recipe>(`${this.apiUrl}/${this.endpoint}/${id}/edit`)
      .pipe(
        map((response: any) => {
          return response.map(recipeJson => this.serializer.fromJson(recipeJson))
        })
      )
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${this.endpoint}/${id}`)
      .pipe(
        map((response: any) => {
          return this.serializer.fromJson(response)
        })
      )
  }
}

class RecipeSerializer {

  fromJson(json: any): Recipe {
    console.log(json.id + json.name);
    return new Recipe(json.id, json.name);
  }

  toJson(person: Recipe): any {

    return {
      name: person.getName()
    }
  }
}
