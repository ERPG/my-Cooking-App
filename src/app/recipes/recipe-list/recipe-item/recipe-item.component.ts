import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter< void >();

  @Input() recipe: Recipe;

  @ViewChild('recipeName') recipeName: ElementRef;
  @ViewChild('recipeDescription') recipeDescription: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ondisplayRecipe() {
    this.recipeSelected.emit();

  }

}
