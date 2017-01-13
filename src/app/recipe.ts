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

    constructor(
        id: string,
        title: string,
        description: string,
        time: string,
        tags: string[],
        ingredients: Ingredient[],
        steps: string[],
        imagePaths: string[]
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.time = time;
        this.tags = tags;
        this.ingredients = ingredients;
        this.steps = steps;
        this.imagePaths = imagePaths;
    }
}