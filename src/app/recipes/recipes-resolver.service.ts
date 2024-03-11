import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {RecipeModel} from "./recipe.model";
import {DataStorageService} from "../shared/data-storage.service";

@Injectable({providedIn: "root"})
export class RecipesResolverService implements Resolve<RecipeModel[]>{

  constructor(private dataStorageService: DataStorageService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.dataStorageService.fetchRecipes();
  }

}
