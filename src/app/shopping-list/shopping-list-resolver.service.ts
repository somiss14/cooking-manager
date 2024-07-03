import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IngredientModel} from "../shared/ingredient.model";
import {Injectable} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";
import {ShoppingListService} from "./shopping-list.service";

@Injectable({providedIn: 'root'})
export class ShoppingListResolverService implements Resolve<IngredientModel[]>{

  constructor(private dataStorageService: DataStorageService, private shoppingListService: ShoppingListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const ingredients = this.shoppingListService.getIngredients();

    if (ingredients.length === 0) {
      return this.dataStorageService.fetchIngredients();
    } else {
      return ingredients;
    }
  }
}
