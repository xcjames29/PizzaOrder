const Order = require("../model/order")

const printAllOrder = async () => {
    let orderList = await Order.find().populate({
        path: 'orders',
        populate: {
            path: 'pizza'
        }
    })
    console.log(orderList[0].orders);
    console.log("---------");
    if (orderList.length === 0) console.log(" 0 Results.")
    orderList.forEach((e, index) => {
        console.log("**************")
        console.log("Order no. " + (index + 1))
        e.orders.forEach(orderlist => {
            console.log(orderlist.pizza.name + " | Quantity: " + orderlist.quantity)
        })
        console.log("**************")
    });
    console.log("---------");
    return orderList
}



const printOrderById = async (id) => {
    let orderList = null;
    try{
        orderList = await Order.findOne({ _id: id }).populate({
            path: 'orders',
            populate: {
                path: 'pizza'
            }
        })
    } catch(e){
        orderList = null;
    } 
    if(!orderList) return null
    console.log("---------");
    if (orderList.length === 0) console.log(" 0 Results.")
    console.log("**************")
    orderList.orders.forEach(orderlist => {
        console.log(orderlist.pizza.name + " | Quantity: " + orderlist.quantity)
    });
    console.log("**************")
    console.log("---------");
    return orderList
}

const addOrder = async () => {
    // /60c2d5626fc311854dfc1bae
    const order = Order({ orders: ["60c2e27368cbec6d888c81c5", '60c2e298e95c041ae83db14d'] });
    await order.save();
    console.log(order + " is added");
}

module.exports = {
    printAllOrder,
    addOrder,
    printOrderById
}