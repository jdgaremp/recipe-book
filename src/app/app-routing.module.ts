import { SearchComponent } from './search/search.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'recipe/search', component: HomeComponent },
  { path: 'recipe/add', component: AddRecipeComponent },
  { path: 'recipe/:id/edit', component: EditRecipeComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
