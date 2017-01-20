import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient';

@Injectable()
export class ShoppingListService {
  private _ingredients: Ingredient[] = [];
  private _names: string[] = [];
  private _index: number[] = [];

  getList(): Ingredient[] {
    return this._ingredients;
  }

  getListString(): string[] {
    var j=0;
    var result = [];
    for(var i=0; i<this._ingredients.length; i++){
      if(i===this._index[j]){
        result.push(this._names[j++]);
      }
      result.push("✤    " + this._ingredients[i].name + ", " + this._ingredients[i].amount);
    }
    return result;
  }

  addToList(items: Ingredient[], recipeName: string): void {
    this._index.push(this._ingredients.length);
    this._names.push(recipeName);
    Array.prototype.push.apply(this._ingredients, items);
  }
}
