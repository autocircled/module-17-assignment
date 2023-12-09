const productModel = require('../model/ProductModel');

const createProduct = async (req, res) => {
    const newProduct = new productModel(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json({message: 'Product has been created', data: savedProduct});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json({message: 'Product has been updated', data: updatedProduct});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Product has been deleted', data: deletedProduct});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const getProduct = async (req, res) => {

    try {
        const id = req.params.id;       
        const product = await productModel.findById(id);
        res.status(200).json({message: 'Product has been found', data: product});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};
const getAllProducts = async (req, res) => {

    try {      
        const product = await productModel.find();
        res.status(200).json({message: 'Products has been found', data: product});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProduct
}