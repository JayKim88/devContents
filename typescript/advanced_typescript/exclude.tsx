type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemon Tea";

let JohnDrink: AvailableDrinks;
JohnDrink = "Coffee";

type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";
type DrinksJaneLikes = "Tea" | "Lemon Tea" | "Mohito";
let JaneDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
JaneDrink = "Lemon Tea";
let JaneCanDrink: Extract<AvailableDrinks, DrinksJaneLikes>;
JaneCanDrink = "Lemon Tea";
