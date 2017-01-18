import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Recipe } from "../../recipe";
import { ShoppingListService } from '../../services/shopping-list.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  mainImagePath: string = "http://placehold.it/1240x250";

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) { }

  addToList(): void {
    if (!this.selectedRecipe) { return; }
    this.shoppingListService.addToList(this.selectedRecipe.ingredients);
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .switchMap((params: Params) => this.recipeService.getSelectedRecipe(params['id']))
      .subscribe(recipe => this.selectedRecipe = recipe);

    if (this.selectedRecipe) {
      this.mainImagePath = this.selectedRecipe.imagePaths[0] ? this.selectedRecipe.imagePaths[0] : "http://placehold.it/1240x250";
    }
  }
}
