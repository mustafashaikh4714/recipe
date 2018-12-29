import { AuthService } from './../auth/auth.service';
import {map} from 'rxjs/internal/operators';
import { Recipe } from './../recipes/recipe.model';

import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "../../../node_modules/@angular/core";
import { Http, Response } from "../../../node_modules/@angular/http";
import 'rxjs'

@Injectable()
export class DataStorageService {
constructor(private http:Http,
            private recipeService:RecipeService,
            private authService:AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken()
   return this.http.put('https://my-recipe-book-33742.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipe())
  }
  getRecipes() {
      const token = this.authService.getToken()
     this.http.get('https://my-recipe-book-33742.firebaseio.com/recipes.json?auth=' + token)
  .pipe(map(
    (response: Response) => {
       const recipes:Recipe[] = response.json();
       for(let recipe of recipes)
       {
           if(!recipe['ingredients'])
           {
               recipe['ingredients'] = [];
           }
       }
       return recipes
    }
))
     .subscribe(
         (recipes:Recipe[]) => {
          
          this.recipeService.setRecipe(recipes);
         }
     );
  }
}