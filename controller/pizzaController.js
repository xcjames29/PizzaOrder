const Pizza = require("../model/pizza");


let Data = [
    {
      "name": "Margherita",
      "price": 5,
      "ingredients": [
        "tomato",
        "mozzarella"
      ]
    },
    {
      "name": "Bufala",
      "price": 6,
      "ingredients": [
        "tomato",
        "mozarella di bufala"
      ]
    },
    {
      "name": "Romana",
      "price": 5,
      "ingredients": [
        "tomato",
        "mozzarella",
        "anchovies",
        "oregano",
        "oil"
      ]
    },
    {
      "name": "Diavola",
      "price": 7.5,
      "ingredients": [
        "tomato",
        "mozzarella",
        "spicy salami"
      ]
    },
    {
      "name": "Pizza Bianca",
      "price": 5,
      "ingredients": [
        "mozzarella",
        "oregano"
      ]
    }
  ];

const printAllPizzas = async () => {
    let pizzas = await Pizza.find();
    console.log("---------");
    if (pizzas.length === 0) console.log(" 0 Results.")
    pizzas.forEach(e => {
        console.log(e.name +" | Price: " + e.price +" | Ingredients:" + e.ingredients.join(", ")); 
    });
    console.log("---------");
    return pizzas
}


module.exports = {
    printAllPizzas
}