import { ShoppingListService } from './../shopping-list/shopping-list.service';
import {Recipe} from "./recipe.model"
import {  Injectable} from "../../../node_modules/@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from '../../../node_modules/rxjs';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
     recipes:Recipe[] = [
    new Recipe('the test recipe',
    'this is simply a text maybe', 
    'https://images.pexels.com/photos/161674/appetite-beef-big-bread-161674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  [ new Ingredient('buttter', 2),
    new Ingredient('meat' ,5)]),
  
    new Recipe('Another test recipe',
     'this is simply a text maybe',
     'https://images.pexels.com/photos/161674/appetite-beef-big-bread-161674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
     [
      new Ingredient('meat' ,5),
      new Ingredient('Buns' ,3)
     ])
  ];

      constructor(private slService:ShoppingListService){ } 

      setRecipe(recipes:Recipe[]) {
      this.recipes = recipes
      this.recipeChanged.next(this.recipes.slice());
      }
      getRecipe(){
      return this.recipes.slice();
  }
      getRecipes(index:number){
       return this.recipes.slice()[index]
      }

      addIngredientToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredientFromRecipeItem(ingredients)
      }
      
      addRecipe(newRecipe:Recipe) {
      this.recipes.push(newRecipe);
      this.recipeChanged.next(this.recipes.slice()); 
      }
      updateRecipe(id:number, newRecipe:Recipe) {
      this.recipes[id] = newRecipe;
      this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number) {
        this.recipes.splice(index ,1);
        this.recipeChanged.next(this.recipes.slice())
      }
}
