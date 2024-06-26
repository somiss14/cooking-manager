import {Injectable} from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged= new Subject<RecipeModel[]>()

  // private recipes: RecipeModel[] = [
  //   new RecipeModel(
  //     'A tasty schnitzel',
  //     'A super tasty schnitzel',
  //     'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/mielone_02.jpg',
  //     [
  //       new IngredientModel('Meat', 1),
  //       new IngredientModel('French Fries', 20)
  //     ]),
  //   new RecipeModel(
  //     'A test recipe2',
  //     'Better than Mc Donalds',
  //     'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/img_20220509_153243jpg1656604561301.jpg',
  //     [
  //       new IngredientModel('Buns', 2),
  //       new IngredientModel('Meat', 1)
  //     ])
  // ];
  private recipes: RecipeModel[] = [];

  constructor(private shoppingList: ShoppingListService) {
  }

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingList.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModel){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
