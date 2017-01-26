import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  items: string[];
  isEditing: boolean[] = [];

  constructor(
    private shoppingListService: ShoppingListService
    ) { }

  ngOnInit() {
    this.items = this.shoppingListService.getListString();
    for (var i = 0; i < this.items.length; i++) {
      this.isEditing[i] = false;
    }
    //Fot testing
    if (!this.items || this.items.length === 0) {
      this.items.push("Ingredient 1, amount");
      this.items.push("Ingredient 2, amount");
      this.items.push("Ingredient 3, amount");
      this.items.push("Ingredient 4, amount");
      this.isEditing.push(false);
      this.isEditing.push(false);
      this.isEditing.push(false);
      this.isEditing.push(false);
    }
  }

  delete(i: number): void {
    this.shoppingListService.deleteIngredient(i);
    this.isEditing.splice(i, 1);
  }

  edit(i: number): void {
    if (!this.isEditing[i]) {
      this.isEditing[i] = true;
    }
  }

  save(i: number): void {
    this.isEditing[i] = false;
  }

  onBlur(event: any, i: number){
    this.shoppingListService.changeIngredient(event.target.value, i);
    this.isEditing[i] = false;
  }

  addItemActivate(){
    this.shoppingListService.addIngredient("");
    this.isEditing[this.items.length-1] = true;
  }
}
