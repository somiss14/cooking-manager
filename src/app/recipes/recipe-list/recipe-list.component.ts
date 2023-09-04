import { Component } from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: RecipeModel[] = [
    new RecipeModel('A test recipe', 'Test desc', 'https://ps.w.org/wp-recipe-maker/assets/icon-128x128.png?rev=1491788'),
    new RecipeModel('A test recipe2', 'Test desc2', 'https://ps.w.org/wp-recipe-maker/assets/icon-128x128.png?rev=1491788')
  ];
}
