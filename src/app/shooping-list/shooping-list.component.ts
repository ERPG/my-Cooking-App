import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shooping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  @Input() shoppingList: boolean;
  ingredients: Ingredient[];

  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => { this.ingredients = ingredients; }
      );
  }

}
