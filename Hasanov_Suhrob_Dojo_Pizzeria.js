function pizzaOven(crustType, sauseType, cheeses, toppings){
    let pizza = {};
   pizza.crustType = crustType;
   pizza.sauseType = sauseType;
   pizza.cheeses = cheeses;
   pizza.toppings = toppings;
    
    return pizza;
}
    
    let firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
    console.log(firstPizza);
    
    let secondPizza = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
    console.log(secondPizza);
    
    let thirdPizza = pizzaOven ("thin", "ranch", ["mozzarella", "feta"], ["mushrooms", "chicken", "onions"]);
    console.log(thirdPizza);
    
    let fourthPizza = pizzaOven ("gluten free", ["squash", "traditional"], "mozzarella", ["mushrooms", "peppers", "onions"]);
    console.log(fourthPizza);

