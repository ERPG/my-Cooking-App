import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shooping-list/shooping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()// inject a service into another
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
    'A test recipe',
    'this is cimply test',
    'http://cdn-img.health.com/sites/default/files/styles/small_16_9/public/1493659062/tangy-coleslaw-bbq.jpg?itok=3T8GFBc_',
    [
      new Ingredient('peanut', 5),
      new Ingredient('Col Salad', 1),
      new Ingredient('butter', 1)
    ]),
    new Recipe(
    'Salmon with cheese',
    'Make a salmon and then cook it',
    'http://images.media-allrecipes.com/images/61481.jpg',
    [
      new Ingredient('Salmon', 1),
      new Ingredient('Species', 10),
      new Ingredient('potatoes', 2)
    ]),
    new Recipe(
      'Chicken Soup',
      'make the chicken and prepare the soup',
      'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg',
      [
      new Ingredient('Chicken', 2),
      new Ingredient('Water', 1),
      new Ingredient('Species', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}
 // add the injectable service to the constructor to get access to it.

  getRecipes() {
    return this.recipes.slice();
    // this will return a copy of the array so we cannot modifed from outside
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
