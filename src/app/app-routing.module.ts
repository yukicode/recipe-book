import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';



const routes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    { path: 'recipe', component: RecipeComponent },
    { path: 'shoppinglist', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }