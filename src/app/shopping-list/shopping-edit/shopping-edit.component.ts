import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef; //potencjalnie zamiast nazwy referncji można podać nazwę całego komponentu
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new IngredientModel(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
