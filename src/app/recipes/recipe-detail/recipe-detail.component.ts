import { RecipeService } from './../recipe.service';
import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe:Recipe;
 id:number;
  constructor(private recipeService:RecipeService,
              private routes:ActivatedRoute,
               private router:Router) { }

  ngOnInit() {
    this.routes.params
    .subscribe(
      (param:Params) => {
        this.id = +param['id']
        this.recipe = this.recipeService.getRecipes(this.id)
      }
    );
  }

  onIngredientAdded(){
   this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
   this.router.navigate(['edit'] , {relativeTo:this.routes})
  // this.router.navigate(['../' , this.id ,'edit'] ,{relativeTo:this.routes})
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
}
