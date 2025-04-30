const { default: mongoose } = require('mongoose');
const Product = require('./../models/product.model.js');
const {asyncHandler, ApiError, ApiResponse} = require('./../utils');

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.aggregate([
        {
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: '_id',
                as: 'category'
            }
        },
        {$unwind: '$category' },
        {
            $lookup: {
                from: 'subcategories',
                localField: 'subCategory',
                foreignField: '_id',
                as: 'subCategory'
            }
        },
        {
            $addFields :{
                subCategory: { $arrayElemAt: ["$subCategory", 0] }
            }
        },
        {
            $project: {
                __v: 0,
                category: {
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0
                },
                subCategory: {
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0
                }
            }
        }
    ]);

    res.status(200).json(new ApiResponse(200, 'Products data found.', products));
});

const getProductById = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    
    const products = await Product.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(productId) }
        },
        {
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: '_id',
                as: 'category'
            }
        },
        {
            $lookup: {
                from: 'subcategories',
                localField: 'subCategory',
                foreignField: '_id',
                as: 'subCategory'
            }
        },
        {
            $addFields :{
                category: { $arrayElemAt: ['$category', 0]},
                subCategory: { $arrayElemAt: ["$subCategory", 0] }
            }
        },
        {
            $project: {
                __v: 0,
                category: {
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0
                },
                subCategory: {
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0
                }
            }
        }
    ]);

    if(!products[0]){
        throw new ApiError(404, 'Product not found.');
    }

    res.status(200).json(new ApiResponse(200, 'Product details fetched successfully.', products[0]));
});

const getProductBySubCategoryId = asyncHandler(async (req, res) => {
    const subCatId = req.params.subCatId;
    
    const products = await Product.aggregate([
        {
            $match: { subCategory: new mongoose.Types.ObjectId(subCatId) }
        },
        {
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: '_id',
                as: 'category'
            }
        },
        {
            $lookup: {
                from: 'subcategories',
                localField: 'subCategory',
                foreignField: '_id',
                as: 'subCategory'
            }
        },
        {
            $addFields :{
                category: { $arrayElemAt: ['$category', 0]},
                subCategory: { $arrayElemAt: ["$subCategory", 0] }
            }
        },
        {
            $project: {
                __v: 0,
                category: {
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0
                },
                subCategory: {
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0
                }
            }
        },
        {
            $sort: { updatedAt: -1 }
        }
    ]);

    if(products.length == 0){
        throw new ApiError(404, 'No product found in given category.');
    }
    
    res.status(200).json(new ApiResponse(200, 'Products found in given category.', products));
});

const createProduct = asyncHandler(async (req, res) =>{
    const { 
        name, slug, shortDesc, category, subCategory, 
        brand, isFeatured, status, thumbnail 
    } = req.body;

    const product = new Product({
        name,
        slug,
        shortDesc,
        category,
        subCategory,
        brand,
        isFeatured,
        status,
        thumbnail
    });

    await product.save();

    res.status(201).json(new ApiResponse(201, 'Product has been created successfully.', product));
});

const updateProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    const { 
        name, shortDesc, category, subCategory, 
        brand, isFeatured, status, thumbnail 
    } = req.body;

    // Find product by ID
    const product = await Product.findById(productId);
    
    if (!product) {
        throw new ApiError(404, "Product not found" );
    }

    // Update fields only if new values are provided
    if (name) product.name = name;
    if (shortDesc) product.shortDesc = shortDesc;
    if (category) product.category = category;
    if (subCategory) product.subCategory = subCategory;
    if (brand) product.brand = brand;
    if (isFeatured !== undefined) product.isFeatured = isFeatured;
    if (status) product.status = status;
    if (thumbnail) product.thumbnail = thumbnail;

    // Save the updated product
    await product.save();

    res.status(200).json(new ApiResponse(200, 'Product updated successfully.', product));
});

const deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    // Find and delete the product
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
        throw new ApiError(404, 'Product not found');
    }

    res.status(200).json(new ApiResponse(200, 'Product deleted successfully.'));
});

module.exports = { 
    getAllProducts, 
    getProductById, 
    // getProductByCategoryId, 
    getProductBySubCategoryId, 
    createProduct, 
    updateProduct, 
    deleteProduct 
}