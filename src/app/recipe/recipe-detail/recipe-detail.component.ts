import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Recipe } from "../../recipe";
import { Ingredient } from "../../ingredient";
import { ShoppingListService } from '../../services/shopping-list.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  selectedIngredients: boolean[] = [];
  mainImagePath: string = "http://placehold.it/1240x250";

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) { }

  addAllToList(): void {
    if (!this.selectedRecipe) { return; }
    this.shoppingListService.addToList(this.selectedRecipe.ingredients, this.selectedRecipe.title);
  }

  addSelectedToList(): void {
    var length = this.selectedRecipe.ingredients.length;
    var temp = [];
    for(var i=0; i<length; i++){
      if(this.selectedIngredients[i]){
        temp.push(this.selectedRecipe.ingredients[i]);
      }
    }
    this.shoppingListService.addToList(temp, this.selectedRecipe.title);
  }

  toggleSelect(i: number): void {
    if(this.selectedIngredients[i] == undefined){
      this.selectedIngredients[i] = true;
    }else {
      this.selectedIngredients[i] = !this.selectedIngredients[i];
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .switchMap((params: Params) => this.recipeService.getSelectedRecipe(params['id']))
      .subscribe(recipe => {
        this.selectedRecipe = recipe;
        this.mainImagePath = this.selectedRecipe.imagePaths[0] ? this.selectedRecipe.imagePaths[0] : "http://placehold.it/1240x250";
      });
  }
}
