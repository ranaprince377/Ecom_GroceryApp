const express = require('express');
const { 
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    // getAllSubCategory,
    // getSubCategoryById,
    // createSubCategory,
    // updateSubCategory,
    // deleteSubCategory
} = require('../controllers/categoryController.js');
const {getProductByCategoryId, getProductBySubCategoryId} = require('../controllers/productController.js');

const router = express.Router();

router.get('/', getAllCategory);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

router.get('/:catId/products', getProductByCategoryId);
router.get('/:id?/sid/:subCatId/products', getProductBySubCategoryId);

// router.get('/sub-category/', getAllSubCategory);
// router.get('/sub-category/:id', getSubCategoryById);
// router.post('/sub-category/', createSubCategory);
// router.put('/sub-category/:id'. updateSubCategory);
// router.delete('/sub-category/:id', deleteSubCategory);

module.exports = router;