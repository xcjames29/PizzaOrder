const OrderList = require("../model/orderItem")

const printAllOrderList = async () => {
    let orderList = await OrderList.find().populate("pizza");
    console.log(orderList);
    console.log("---------");
    if (orderList.length === 0) console.log(" 0 Results.")
    orderList.forEach(e => {
        console.log(e.pizza.name +" | Quantity: " + e.quantity); 
    });
    console.log("---------");
    return orderList
}

const addOrderList = async ()=>{
    // /60c2d5626fc311854dfc1bae
    const orderList =OrderList({ pizza: "60c2db3a448bc161a024a6c6",quantity:3 });
    await orderList.save();
    console.log(orderList + " is added");
}

module.exports = {
    printAllOrderList,
    addOrderList
}