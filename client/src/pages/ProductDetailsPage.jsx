import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        (async () => {
            const product = await getProductById(productId);
            setProduct(product);
        })();
    }, [productId]);

    return (
        <main>
            <div className="mt-4">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {/* col */}
                        <div className="col-12">
                            {/* breadcrumb */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Bakery Biscuits</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{product?.name}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="mt-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* img slide */}
                            <div className="product" id="product">
                                <div
                                    className="zoom"
                                    style={{ backgroundImage: `url(/${product?.thumbnail})` }}
                                >
                                    <img src={`/${product?.thumbnail}`} alt="" />
                                </div>
                            </div>
                            {/* product tools */}
                            <div className="product-tools">
                                <div className="thumbnails row g-3" id="productThumbnails">
                                    <div className="col-3">
                                        <div className="thumbnails-img">
                                            <img src={`/${product?.thumbnail}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="thumbnails-img">
                                            <img src="/assets/images/products/product-single-img-2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="thumbnails-img">
                                            <img src="/assets/images/products/product-single-img-3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="thumbnails-img">
                                            <img src="/assets/images/products/product-single-img-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ps-lg-10 mt-6 mt-md-0">
                                {/* content */}
                                <a href="#!" className="mb-4 d-block">{product?.category?.name} / {product?.subCategory?.name}</a>
                                {/* heading */}
                                <h1 className="mb-1">{product?.name} </h1>
                                <div className="mb-4">
                                    {/* rating */}
                                    <small className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </small>
                                    <a href="#" className="ms-2">(30 reviews)</a>
                                </div>
                                <div className="fs-4">
                                    {/* price */}
                                    <span className="fw-bold text-dark">$32</span>
                                    <span className="text-decoration-line-through text-muted">$35</span>
                                    <span>
                                        <small className="fs-6 ms-2 text-danger">26% Off</small>
                                    </span>
                                </div>
                                {/* hr */}
                                <hr className="my-6" />
                                <div className="mb-5">
                                    <button type="button" className="btn btn-outline-secondary">250g</button>
                                    {/* btn */}
                                    <button type="button" className="btn btn-outline-secondary">500g</button>
                                    {/* btn */}
                                    <button type="button" className="btn btn-outline-secondary">1kg</button>
                                </div>
                                <div>
                                    {/* input */}
                                    <div className="input-group input-spinner">
                                        <input type="button" value="-" className="button-minus btn btn-sm" data-field="quantity" />
                                        <input
                                            type="number"
                                            step="1"
                                            max="10"
                                            defaultValue="1"
                                            name="quantity"
                                            className="quantity-field form-control-sm form-input"
                                        />
                                        <input type="button" value="+" className="button-plus btn btn-sm" data-field="quantity" />
                                    </div>
                                </div>
                                <div className="mt-3 row justify-content-start g-2 align-items-center">
                                    <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                                        {/* button */}
                                        <button type="button" className="btn btn-primary">
                                            <i className="feather-icon icon-shopping-bag me-2"></i>Add to cart
                                        </button>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        {/* btn */}
                                        <a className="btn btn-light" href="#" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare">
                                            <i className="bi bi-arrow-left-right"></i>
                                        </a>
                                        <a className="btn btn-light" href="shop-wishlist.html" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist">
                                            <i className="feather-icon icon-heart"></i>
                                        </a>
                                    </div>
                                </div>
                                {/* hr */}
                                <hr className="my-6" />
                                <div>
                                    {/* table */}
                                    <table className="table table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <td>Product Code:</td>
                                                <td>FBB00255</td>
                                            </tr>
                                            <tr>
                                                <td>Availability:</td>
                                                <td>In Stock</td>
                                            </tr>
                                            <tr>
                                                <td>Type:</td>
                                                <td>Fruits</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping:</td>
                                                <td>
                                                    <small>
                                                        01 day shipping.<span className="text-muted">( Free pickup today)</span>
                                                    </small>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-8">
                                    {/* dropdown */}
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-outline-secondary dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Share
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-facebook me-2"></i>Facebook
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-twitter me-2"></i>Twitter
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-instagram me-2"></i>Instagram
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Additional sections omitted for brevity */}
        </main>
    );
};

export default ProductDetailsPage;
