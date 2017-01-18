import { Injectable } from '@angular/core';
import { RECIPES } from '../recipes.data';
import { Recipe } from '../recipe';

@Injectable()
export class RecipeService {
  allRecipes: Recipe[] = RECIPES;

  getRecipes(): Recipe[] {
    return this.allRecipes;
  }
  getSelectedRecipe(id: string): Recipe {
    this.allRecipes.forEach(r => {
      if (r.id === id) {
        return r;
      }
    });
    return new Recipe("", "", "", "", [], [], [], []);
  }
}
