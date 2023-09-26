import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'A tasty schnitzel',
      'A super tasty schnitzel',
      'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/mielone_02.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20)
      ]),
    new RecipeModel('A test recipe2',
      'Better than Mc Donalds',
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/img_20220509_153243jpg1656604561301.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1)
      ])
  ];

  constructor(private shoppingList: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingList.addIngredients(ingredients);
  }
}
