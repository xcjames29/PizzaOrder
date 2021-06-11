const Order = require("../model/order")

const printAllOrderOrder = async () => {
    let orderList = await Order.find().populate("orders").populate("pizza");
    console.log(orderList.orders);
    console.log("---------");
    if (orderList.length === 0) console.log(" 0 Results.")
    orderList.forEach(e => {
        console.log(e.orders.pizza.name +" | Quantity: " + e.orders.quantity); 
    });
    console.log("---------");
    return orderList
}

const addOrder = async ()=>{
    // /60c2d5626fc311854dfc1bae
    const order =Order({ orders: ["60c2e27368cbec6d888c81c5",'60c2e298e95c041ae83db14d'] });
    await order.save();
    console.log(order + " is added");
}

module.exports = {
    printAllOrderOrder,
    addOrder
}