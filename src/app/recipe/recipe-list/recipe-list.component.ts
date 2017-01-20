import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import { Recipe } from '../../recipe';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor (private recipeService: RecipeService){}

  ngOnInit() {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }
}
