import {Ingredient} from './ingredient';

export class Recipe{
    id: string;
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    serving: string;
    tags: string[];
    ingredients: Ingredient[];
    steps: string[];
    imagePaths: string[];

    constructor(
        id: string,
        title: string,
        description: string,
        prepTime: string,
        cookTime: string,
        serving: string,
        tags: string[],
        ingredients: Ingredient[],
        steps: string[],
        imagePaths: string[]
    ){
        this.id = id;
        this.title = title;
        this.description = description || "";
        this.prepTime = prepTime || "";
        this.cookTime = cookTime || "";
        this.serving = serving || "";
        this.tags = tags || [];
        this.ingredients = ingredients || [];
        this.steps = steps || [];
        this.imagePaths = imagePaths || [];
    }
}