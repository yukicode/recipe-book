import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient';

@Injectable()
export class ShoppingListService {
  private _ingredients: Ingredient[] = [];

  getList(): Ingredient[] {
    return this._ingredients;
  }

  addToList(items: Ingredient[]): void {
    Array.prototype.push.apply(this._ingredients, items);
  }
}
