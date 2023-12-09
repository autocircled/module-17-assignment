const Router = require('express')
const router = Router()

const { createUser, updateUser, deleteUser, getUser } = require('../controllers/UserController')
router.post('/register', createUser)
router.put('/updateProfile/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/getUser', getUser)

const { createProduct, updateProduct, deleteProduct, getAllProducts, getProduct } = require('../controllers/ProductController')
router.post('/createProduct', createProduct)
router.put('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)
router.get('/getAllProducts', getAllProducts)
router.get('/getProduct/:id', getProduct)


const { createCartItem, updateCartItem, deleteCartItem, getAllCartItemsByUserID } = require('../controllers/CartItemController')
router.post('/createCartItem', createCartItem)
router.put('/updateCartItem/:id', updateCartItem)
router.delete('/deleteCartItem/:id', deleteCartItem)
router.get('/getAllCartItemsByUserID/:userID', getAllCartItemsByUserID)


const { createOrder, orderListUpdate, cancelOrderByID } = require('../controllers/OrderController')
router.post('/createOrder', createOrder)
router.put('/orderListUpdate/:userID', orderListUpdate)
router.delete('/cancelOrderByID/:orderID', cancelOrderByID)




module.exports = router;