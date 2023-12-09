const UserModel = require('../model/UserModel');

const createUser = async (req, res) => {
    const newUser = new UserModel(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json({message: 'User has been created', data: savedUser});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json({message: 'User has been updated', data: updatedUser});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'User has been deleted', data: deletedUser});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};

const getUser = async (req, res) => {

    try {
        const email = req.body.email;        
        const user = await UserModel.find({email});
        res.status(200).json({message: 'User has been found', data: user});
    } catch (err) {
        res.status(500).json({message: 'Error', error: err.message});
    }
};


module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUser
}