const { default: mongoose } = require('mongoose');
const Category = require('./../models/category.model.js');
const { asyncHandler, ApiResponse, ApiError } = require('./../utils');

const getAllCategory = asyncHandler(async (req, res) => {
    const categories = await Category.aggregate([
        {
            $lookup: { 
                from: 'subcategories',
                localField: '_id',
                foreignField: 'parentCategory',
                as: 'subCategories'
            }
        },
        {
            $project: {
                __v: 0,
                subCategories: {
                    __v: 0,
                    parentCategory: 0,
                    createdAt: 0,
                    updatedAt: 0
                }
            }
        }
    ]);

    res.status(200).json(new ApiResponse(200, 'Categories data found.', categories));
});

const getCategoryById = asyncHandler(async (req, res) => {
    const catId = req.params.id;

    // const category = await Category.findById(catId).select('-__v');
    const category = await Category.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(catId) // Convert ID to ObjectId
            }
        },
        {
            $lookup: {
                from: 'subcategories',
                localField: '_id',
                foreignField: 'parentCategory',
                as: 'subCategories'
            }
        },
        {
            $project: {
                __v: 0,
                subCategories: {
                    __v: 0,
                    parentCategory: 0,
                    createdAt: 0,
                    updatedAt: 0
                }
            }
        }
    ]);

    if(category.length > 0){
        res.status(200).json(new ApiResponse(200, 'Category details fetched successfully.', category));
    }
    else{
        throw new ApiError(404, 'No category found with given id.');
    }
});

const createCategory = asyncHandler(async (req, res) => {
    const {name, thumbnail} = req.body;

    const category = new Category({
        name, thumbnail
    });

    await category.save();

    res.status(200).json(new ApiResponse(200, 'Category created successfully.', category));
});

const updateCategory = asyncHandler(async (req, res) => {
    const catId = req.params.id;

    const {name, thumbnail} = req.body;

    const category = await Category.findById(catId);
    
    if (!category) {
        throw new ApiError(404, 'Category not found.');
    }
    
    if (name) category.name = name;
    if (thumbnail) category.thumbnail = thumbnail;

    await category.save();

    res.status(200).json(new ApiResponse(201, 'Category has been updated successfully.', category));
});

const deleteCategory = asyncHandler(async (req, res) => {
    const catId = req.params.id;

    const result = await Category.deleteOne({ _id: catId });

    if (result.deletedCount === 0) {
        throw new ApiError(404, 'Category not found.');
    }

    res.status(200).json(new ApiResponse(200, 'Category deleted successfully.'));
});

module.exports = { 
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
}