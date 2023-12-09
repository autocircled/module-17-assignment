const mongoose = require("mongoose");

// First defined order items schema
const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
},
{
    timestamps: false,
    versionKey: false,
});

// Then defined order schema
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    items: {
        type: [orderItemSchema],
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending",
        required: true,
    }
},
{
    timestamps: true,
    versionKey: false,
});

const OrderModel = mongoose.model("orders", orderSchema);
module.exports = OrderModel;