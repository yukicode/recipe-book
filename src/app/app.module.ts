import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { Ingredient } from './ingredient';
import { Recipe } from './recipe';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { ShoppingListService } from './services/shopping-list.service';
import { RecipeService } from './services/recipe.service';

import { AppRoutingModule } from './routing/app-routing.module';
import { RecipeRoutingModule } from './routing/recipe-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    ShoppingListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RecipeRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
