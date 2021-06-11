const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
    pizza: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Pizza"
    },
    quantity:{
        type: Number,
        required: true
    },
})

const OrderItemModel = new mongoose.model('OrderItem',OrderItemSchema);

module.exports = OrderItemModel;