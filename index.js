const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 7777;

const PizzaController = require("./controller/pizzaController")
const OrderItemController = require("./controller/orderItemController");
const OrderController = require("./controller/orderController");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/pizza", async(req,res)=>{
    await mongoose.connect('mongodb://localhost/pizzaDb', {
        useNewUrlParser: true,
            useUnifiedTopology: true
    })
    console.log(req.query)
    let data = await PizzaController.printAllPizzas();
    if(req.query.ingredients){
        let newData = [];
        let options = req.query.ingredients.split(",");
        console.log("options",options);
        data.forEach(e => {
            let hasAll = true;
            options.forEach(query=>{
                if(!e.ingredients.includes(query)) hasAll= false
            })
            if(hasAll) newData.push(e)
        });
        data = newData;
    }  
    console.log(data)
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


app.get("/order/:id", async(req,res)=>{
    await mongoose.connect('mongodb://localhost/pizzaDb', {
        useNewUrlParser: true,
            useUnifiedTopology: true
    })
    console.log(req.params.id)
    let data = await OrderController.printOrderById(req.params.id);
    res.json(data);
})

app.get("/order", async(req,res)=>{
    await mongoose.connect('mongodb://localhost/pizzaDb', {
        useNewUrlParser: true,
            useUnifiedTopology: true
    })
    let data = await OrderController.printAllOrder();
    res.json(data);
})


app.listen(PORT, ()=>{
    console.log("Server is listening at PORT "+PORT);
})