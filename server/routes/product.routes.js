const express = require('express');
const { 
    getAllProducts, 
    getProductById, 
    // getProductByCategoryId, 
    getProductBySubCategoryId, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController.js');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
// router.get('/category/:id', getProductByCategoryId);
router.get('/sub-category/:subCatId', getProductBySubCategoryId);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;