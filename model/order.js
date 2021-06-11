const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orders: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "OrderItem",
        require:true,
        unique:true
    }
})

const OrderModel = new mongoose.model('Order',OrderSchema);

module.exports = OrderModel;