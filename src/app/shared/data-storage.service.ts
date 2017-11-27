import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Recipe } from 'app/recipes/recipe.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {
  constructor( private http: Http, private recipeService: RecipeService ) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-cdab6.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-cdab6.firebaseio.com/recipes.json')
    .map(
      (response: Response) => {
        // transform the result in order to have always the ingredients field
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipe(recipes);
      }
    )
  }
}
