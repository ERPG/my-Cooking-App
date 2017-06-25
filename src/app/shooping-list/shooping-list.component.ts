import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  @Input() shoppingList: boolean;

ingredients : Ingredient[] = [
  new Ingredient('Apple', 5),
  new Ingredient('Tomatoes', 10)
];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
