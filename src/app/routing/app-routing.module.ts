import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeComponent } from '../recipe/recipe.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoginComponent } from '../user/login.component';


const routes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    { path: 'recipe', component: RecipeComponent },
    { path: 'shoppinglist', component: ShoppingListComponent },
    { path: 'login', component: LoginComponent},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }