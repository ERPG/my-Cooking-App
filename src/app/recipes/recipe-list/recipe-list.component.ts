import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter < Recipe >(); // here you pass the model
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is cimply test', 'http://cdn-img.health.com/sites/default/files/styles/small_16_9/public/1493659062/tangy-coleslaw-bbq.jpg?itok=3T8GFBc_'),
    new Recipe('Salmon with cheese', 'Make a salmon and then cook it', 'http://images.media-allrecipes.com/images/61481.jpg'),
    new Recipe('Chicken Soup', 'make the chicken and prepare the soup', 'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit( recipe ); // here you past the recipe as a value
  }


}
