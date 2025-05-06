import React, { useState } from 'react';

const AddProductPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        shortDesc: '',
        description: '',
        category: '',
        subCategory: '',
        brand: '',
        isFeatured: false,
        status: 'active',
        attributes: {},
        thumbnail: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4">Add Product</h4>
            <div className="row">
                <div className="col-xl">
                    <div className="card mb-4">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="slug">Slug</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="slug"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="shortDesc">Short Description</label>
                                    <textarea
                                        className="form-control"
                                        id="shortDesc"
                                        name="shortDesc"
                                        value={formData.shortDesc}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="description">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="category">Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="subCategory">Sub-Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subCategory"
                                        name="subCategory"
                                        value={formData.subCategory}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="brand">Brand</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="brand"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                    />
                                </div>


                                <div className="mb-3">
                                    <label className="form-label" htmlFor="thumbnail">Thumbnail</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="thumbnail"
                                        name="thumbnail"
                                        value={formData.thumbnail}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="status">Status</label>


                                    <div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                id="statusval1"
                                                value="active"
                                                checked={formData.status === 'active'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="statusval1">Active</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                id="statusval2"
                                                value="inactive"
                                                checked={formData.status === 'inactive'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="statusval2">Inactive</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="isFeatured">Is Featured</label>
                                    <input
                                        className='form-check-input'
                                        type="checkbox"
                                        id="isFeatured"
                                        name="isFeatured"
                                        checked={formData.isFeatured}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;