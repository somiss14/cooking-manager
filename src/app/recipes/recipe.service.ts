import { Injectable } from '@angular/core';
import {RecipeModel} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: RecipeModel[] = [
    new RecipeModel('A test recipe', 'Test desc', 'https://ps.w.org/wp-recipe-maker/assets/icon-128x128.png?rev=1491788'),
    new RecipeModel('A test recipe2', 'Test desc2', 'https://ps.w.org/wp-recipe-maker/assets/icon-128x128.png?rev=1491788')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
