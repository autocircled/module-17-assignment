const orderModel = require('../model/OrderModel');

const createOrder = async (req, res) => {
    const newOrder = new orderModel(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json({message: 'Order has been created', data: savedOrder});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const orderListUpdate = async (req, res) => {
    const userID = req.params.userID;
    try {
        const existingOrder = await orderModel.findOne({user: userID});
        if (existingOrder) {
            const updatedOrder = await orderModel.findByIdAndUpdate(existingOrder._id, {$set: req.body}, {new: true});
            console.log(updatedOrder);
            res.status(200).json({message: 'Order has been updated', data: updatedOrder});
        } else {
            res.status(200).json({message: 'We did not find any order', data: null});
        }
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};


const cancelOrderByID = async (req, res) => {
    const orderID = req.params.orderID;
    try {
        const deletedOrder = await orderModel.findByIdAndDelete({_id: orderID});
        res.status(200).json({message: 'Order has been deleted', data: deletedOrder});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};


module.exports = {
    createOrder,
    orderListUpdate,
    cancelOrderByID
};