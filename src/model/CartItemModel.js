const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const CartItemModel = mongoose.model("cartItems", cartItemSchema);
module.exports = CartItemModel