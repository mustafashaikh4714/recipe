import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

import {RouterModule, Routes } from "@angular/router";
import { NgModule } from '../../node_modules/@angular/core';
import { SignupComponent } from './auth/signup/signup.component';


const apRoot : Routes = 
    [
        {path:'', redirectTo:'/recipes' , pathMatch:'full'},
        {path:'recipes', component: RecipesComponent , children:[
            {path:'' , component:RecipeStartComponent  },
            {path:'new' , component:RecipeEditComponent, canActivate:[AuthGuard]},
            {path:':id', component:RecipeDetailComponent},
            {path:':id/edit', component:RecipeEditComponent, canActivate:[AuthGuard]},
        ]},
        {path:'shopping-list', component: ShoppingListComponent},
        {path:'signup', component:SignupComponent} ,
        {path:'signin', component:SigninComponent}    
   
    ];

@NgModule({
   imports:[RouterModule.forRoot(apRoot)],
   exports:[RouterModule]
})   
export class AppRoutingModule {

}