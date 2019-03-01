import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchComponent } from './search/search.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { TextFieldComponent } from './shared/text-field/text-field.component';
import { HttpClientModule } from '@angular/common/http';
import { MsgBoxComponent } from './shared/msg-box/msg-box.component';
import { RecipeTableComponent } from './recipe/recipe-table/recipe-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    TextFieldComponent,
    MsgBoxComponent,
    RecipeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
