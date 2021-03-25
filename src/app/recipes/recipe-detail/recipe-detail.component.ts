import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {

    @Input() recipe: Recipe;

    constructor(private shoppingListService: ShoppingListService) { }

    onAddToShoppingList() {
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    }
}