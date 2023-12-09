const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        validate: Number.isInteger,
    },
    category: {
        type: String,
    },
    imageURL: {
        type: String,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;