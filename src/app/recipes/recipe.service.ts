import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe 1',
            'This is a simple Recipe',
            'https://cafedelites.com/wp-content/uploads/2019/01/Creamy-Mushroom-RECIPE-with-Bacon-IMAGE-12.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Test Recipe 2',
            'This is a simple Recipe',
            'https://cafedelites.com/wp-content/uploads/2019/01/Creamy-Mushroom-RECIPE-with-Bacon-IMAGE-12.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    // slice returns a copy of array so cannot be changed from outside
    getRecipes() {
        return this.recipes.slice();
    }
}