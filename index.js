const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 7777;

const PizzaController = require("./controller/pizzaController")
const OrderItemController = require("./controller/orderItemController");
const OrderController = require("./controller/orderController");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/pizza?:ingredients", async(req,res)=>{
    await mongoose.connect('mongodb://localhost/pizzaDb', {
        useNewUrlParser: true,
            useUnifiedTopology: true
    })
    console.log("asdasdasdas",req.params);
    let data = await PizzaController.printAllPizzas();
    res.json(data);
})

app.get("/pizza", async(req,res)=>{
    await mongoose.connect('mongodb://localhost/pizzaDb', {
        useNewUrlParser: true,
            useUnifiedTopology: true
    })
    let data = await PizzaController.printAllPizzas();
    res.json(data);
})

app.get("/orderlist", async(req,res)=>{
    await mongoose.connect('mongodb://localhost/pizzaDb', {
        useNewUrlParser: true,
            useUnifiedTopology: true
    })
    //await OrderItemController.addOrderList();
    let data = await OrderItemController.printAllOrderList();
    res.json(data);
})


app.get("/order", async(req,res)=>{
    await mongoose.connect('mongodb://localhost/pizzaDb', {
        useNewUrlParser: true,
            useUnifiedTopology: true
    })
    //await OrderController.addOrder();
    let data = await OrderController.printAllOrderOrder();
    res.json(data);
})


app.listen(PORT, ()=>{
    console.log("Server is listening at PORT "+PORT);
})