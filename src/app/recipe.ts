import {Ingredient} from './ingredient';

export class Recipe{
    id: string;
    title: string;
    description: string;
    time: string;
    tags: string[];
    ingredients: Ingredient[];
    steps: string[];
    imagePaths: string[];
}