import { Component, Input} from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
}
