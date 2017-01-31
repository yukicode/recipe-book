export class Ingredient {
    name: string;
    amount: number;
    unit: string;

    constructor(
        name: string, 
        amount? : number,
        unit? : string
        ) {
        this.name = name;
        this.amount = amount;
        this.unit = unit;
    }
}

/*******************************************************
 * Examples
 * 
 * Subtitle
 * new Ingredient("Spice mix");
 * 
 * To taste
 * new Ingredient("salt", 0, "to taste");
 * 
 * Portions (1/4) cup
 * new Ingredient("water", 0.25, "cup");
 *******************************************************/
