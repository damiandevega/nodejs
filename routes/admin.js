const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();

// route reached via /admin/add-product => GET
router.get('/add-product', productsController.getAddProductPage);

// route reached via /admin/add-product => POST
router.post('/add-product', productsController.postAddProductPage);

module.exports = router;