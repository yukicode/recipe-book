import { Component, OnInit, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  onSelect(recipe: Recipe){
    this.selectedRecipe = recipe;
  }
}
