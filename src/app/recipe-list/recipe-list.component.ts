import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  ngOnInit() {
    for (var i=0; i<5; i++){
      var r = new Recipe();
      r.id = i+"";
      r.title = "My Recipe " + i;
      r.time = i*10 + " minutes";
      r.ingredients = [];
      r.imagePaths = ["http://divavillage.com/images/Oct05/flan_recipe0709.jpg"];
      this.recipes.push(r);
    }
  }

}
