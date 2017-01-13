import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../ingredient';
import {ShoppingListService} from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[];
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getList();
  }

}
