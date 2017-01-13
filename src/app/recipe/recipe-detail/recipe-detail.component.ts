import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from "../../recipe";
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent{
  private _selectedRecipe: Recipe;
  mainImagePath: string= "http://placehold.it/1240x250";

  constructor (private shoppingListService: ShoppingListService){}

  @Input() set selectedRecipe(r: Recipe){
    this._selectedRecipe = r;
    if(r){
      this.mainImagePath = r.imagePaths[0]? r.imagePaths[0] : "http://placehold.it/1240x250";
    }
  }
  get selectedRecipe(): Recipe {return this._selectedRecipe;}

  addToList() : void {
    if(!this._selectedRecipe){ return;}
    this.shoppingListService.addToList(this._selectedRecipe.ingredients);
  }
}
