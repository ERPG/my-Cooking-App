import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { ShoopingEditComponent } from './shooping-list/shooping-edit/shooping-edit.component';
import { AuthGuard } from 'app/auth/auth-guard.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // Redirect only if the full path is empty
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
  ]},
  { path: 'shooping-list', component: ShoopingListComponent }, // , children: [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  // ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
