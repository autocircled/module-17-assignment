const cartItemModel = require('../model/CartItemModel');

const createCartItem = async (req, res) => {
    const newCartItem = new cartItemModel(req.body);
    try {
        const savedCartItem = await newCartItem.save();
        res.status(200).json({message: 'Cart item has been created', data: savedCartItem});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};


const updateCartItem = async (req, res) => {
    const quantity = req.body.quantity;
    try {
        if (quantity <= 0) {
            const deletedCartItem = await cartItemModel.findByIdAndDelete(req.params.id);
            res.status(200).json({message: 'Cart item has been deleted', data: deletedCartItem});
        } else {
            const updatedCartItem = await cartItemModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json({message: 'Cart item has been updated', data: updatedCartItem});
        }
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const deleteCartItem = async (req, res) => {
    try {
        const deletedCartItem = await cartItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Cart item has been deleted', data: deletedCartItem});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const getAllCartItemsByUserID = async (req, res) => {
    const user = req.params.userID;
    try {
        const cartItems = await cartItemModel.find({user});
        res.status(200).json({message: 'Cart items has been found', data: cartItems});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};


module.exports = {
    createCartItem,
    updateCartItem,
    deleteCartItem,
    getAllCartItemsByUserID
}