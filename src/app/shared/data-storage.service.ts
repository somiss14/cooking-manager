import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {RecipeModel} from "../recipes/recipe.model";
import {map, tap} from "rxjs/operators";
import {IngredientModel} from "./ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private shoppingListService: ShoppingListService) {

  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://cooking-manager-38656-default-rtdb.europe-west1.firebasedatabase.app//recipes.json', recipes)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  fetchRecipes() {
    return this.http.get<RecipeModel[]>(
      'https://cooking-manager-38656-default-rtdb.europe-west1.firebasedatabase.app//recipes.json',
    )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  storeIngredients() {
    const ingredients = this.shoppingListService.getIngredients();
    console.log('ingrediencje', ingredients)

    this.http.put('https://cooking-manager-38656-default-rtdb.europe-west1.firebasedatabase.app//ingredients.json', ingredients)
      .subscribe(
        response => {
          console.log('response z bazy', response);
        }
      )
  }

  fetchIngredients() {
    return this.http.get<IngredientModel[]>('https://cooking-manager-38656-default-rtdb.europe-west1.firebasedatabase.app//ingredients.json')
      .pipe(
        tap(ingredients => {
          this.shoppingListService.setIngredients(ingredients);
        })
      );
  }
}
