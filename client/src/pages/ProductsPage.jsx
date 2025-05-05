import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getProductsByCategoryId, getProductsBySubCategoryId } from '../services/productService';
import Productcard from '../components/Productcard';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const { catSlug, catId, subCatId } = useParams();
    const categories = useSelector((state) => state.categories.items);
    const categoriesLoading = useSelector((state) => state.categories.loading);
    // const category = categories.filter((item) => {
    //     item._id == catId
    // });
    const category = categories.find((item) => item._id === catId);
    const subCategories = category?.subCategories || [];
    let subCategory;
    if (subCatId) {
        subCategory = subCategories.find((item) => item._id === subCatId);
    }

    useEffect(() => {
        async function fetchProductData() {
            if (subCatId) {
                const t_products = await getProductsBySubCategoryId(catId, subCatId);
                setProducts(t_products);
            } else {
                const t_products = await getProductsByCategoryId(catId);
                setProducts(t_products);
            }
        }
        fetchProductData();
    }, [catId, subCatId]);

    return (
        <main>
            {/* <!-- section--> */}
            <div className="mt-4">
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row ">
                        {/* <!-- col --> */}
                        <div className="col-12">
                            {/* <!-- breadcrumb --> */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Home / </Link></li>
                                    <li className="breadcrumb-item"><Link to={`/category/${category?.slug}/cid/${category?._id}`}>{category?.name}</Link></li>
                                    {subCatId && (<li className="breadcrumb-item active" aria-current="page">/{subCategory?.name}</li>)}
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- section --> */}
            <div className=" mt-8 mb-lg-14 mb-8">
                {/* <!-- container --> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row gx-10">
                        {/* <!-- col --> */}
                        <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
                            <div className="offcanvas offcanvas-start offcanvas-collapse w-md-50 " tabIndex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">

                                <div className="offcanvas-header d-lg-none">
                                    <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body ps-lg-2 pt-lg-0">
                                    <div className="mb-8">
                                        {/* <!-- title --> */}
                                        <h5 className="mb-3">Categories</h5>
                                        {/* <!-- nav --> */}
                                        <ul className="nav nav-category" id="categoryCollapseMenu">
                                            {
                                                !categoriesLoading && categories.map((cat) => {
                                                    return (
                                                        <li key={cat._id} className="nav-item border-bottom w-100 " >
                                                            <Link to={`/category/${cat.slug}/cid/${cat._id}`} className={`nav-link ${cat._id === catId ? "" : "collapsed"}`} data-bs-toggle="collapse"
                                                                data-bs-target={`#categoryFlush${cat._id}`} aria-expanded="false" aria-controls={`categoryFlush${cat._id}`}>{cat.name} <i className="feather-icon icon-chevron-right"></i></Link>
                                                            {/* <!-- accordion collapse --> */}

                                                            <div id={`categoryFlush${cat._id}`} className="accordion-collapse collapse"
                                                                data-bs-parent="#categoryCollapseMenu">
                                                                <div>
                                                                    <ul className="nav flex-column ms-3">
                                                                        < li className="nav-item" >
                                                                            <Link to={`/category/${cat.slug}/cid/${cat._id}`} className="nav-link">All Products</Link>
                                                                        </li>
                                                                        {
                                                                            cat.subCategories.map((subcat) => {
                                                                                return (
                                                                                    < li key={subcat._id} className="nav-item" >
                                                                                        <Link to={`/category/${cat.slug}/cid/${cat._id}/sid/${subcat._id}`} className="nav-link">{subcat.name}</Link>
                                                                                    </li>
                                                                                );
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                            {
                                                categoriesLoading && (
                                                    <div className="text-center">
                                                        <div className="spinner-border text-primary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        {/* <!-- price --> */}
                                        <h5 className="mb-3">Price</h5>
                                        <div>
                                            {/* <!-- range --> */}
                                            <div id="priceRange" className="mb-3"></div>
                                            <small className="text-muted">Price:</small> <span id="priceRange-value" className="small"></span>

                                        </div>



                                    </div>
                                    {/* <!-- rating --> */}
                                    <div className="mb-8">

                                        <h5 className="mb-3">Rating</h5>
                                        <div>
                                            {/* <!-- form check --> */}
                                            <div className="form-check mb-2">
                                                {/* <!-- input --> */}
                                                <input className="form-check-input" type="checkbox" value="" id="ratingFive" />
                                                <label className="form-check-label" htmlFor="ratingFive">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                </label>
                                            </div>
                                            {/* <!-- form check --> */}
                                            <div className="form-check mb-2">
                                                {/* <!-- input --> */}
                                                <input className="form-check-input" type="checkbox" value="" id="ratingFour" checked />
                                                <label className="form-check-label" htmlFor="ratingFour">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                </label>
                                            </div>
                                            {/* <!-- form check --> */}
                                            <div className="form-check mb-2">
                                                {/* <!-- input --> */}
                                                <input className="form-check-input" type="checkbox" value="" id="ratingThree" />
                                                <label className="form-check-label" htmlFor="ratingThree">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                    <i className="bi bi-star-fill text-warning "></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                </label>
                                            </div>
                                            {/* <!-- form check --> */}
                                            <div className="form-check mb-2">
                                                {/* <!-- input --> */}
                                                <input className="form-check-input" type="checkbox" value="" id="ratingTwo" />
                                                <label className="form-check-label" htmlFor="ratingTwo">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                </label>
                                            </div>
                                            {/* <!-- form check --> */}
                                            <div className="form-check mb-2">
                                                {/* <!-- input --> */}
                                                <input className="form-check-input" type="checkbox" value="" id="ratingOne" />
                                                <label className="form-check-label" htmlFor="ratingOne">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                    <i className="bi bi-star text-warning"></i>
                                                </label>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="mb-8 position-relative">
                                        {/* <!-- Banner Design --> */}
                                        {/* <!-- Banner Content --> */}
                                        <div className="position-absolute p-5 py-8">
                                            <h3 className="mb-0">Fresh Fruits </h3>
                                            <p>Get Upto 25% Off</p>
                                            <a href="#" className="btn btn-dark">Shop Now<i className="feather-icon icon-arrow-right ms-1"></i></a>
                                        </div>
                                        {/* <!-- Banner Content --> */}
                                        {/* <!-- Banner Image --> */}
                                        {/* <!-- img -->*/}
                                        <img src="/assets/images/banner/assortment-citrus-fruits.png" alt=""
                                            className="img-fluid rounded " />
                                        {/* <!-- Banner Image --> */}
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <section className="col-lg-9 col-md-12">
                            {/* <!-- card --> */}
                            <div className="card mb-4 bg-light border-0">
                                {/* <!-- card body --> */}
                                <div className=" card-body p-5">
                                    <h2 className="mb-0 fs-2">{subCategory?.name || 'All Products'}</h2>
                                </div>
                            </div>
                            {/* <!-- list icon --> */}
                            <div className="d-lg-flex justify-content-between align-items-center">
                                <div className="mb-3 mb-lg-0">
                                    <p className="mb-0"> <span className="text-dark">24 </span> Products found </p>
                                </div>

                                {/* <!-- icon --> */}
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="ms-2 d-lg-none">
                                            <a className="btn btn-outline-gray-400 text-muted" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-filter me-2">
                                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                            </svg> Filters</a>
                                        </div>
                                    </div>

                                    <div className="d-flex mt-2 mt-lg-0">
                                        <div className="me-2 flex-grow-1">
                                            {/* <!-- select option --> */}
                                            <select className="form-select" defaultValue="d">
                                                <option value="d">Show: 50</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                            </select></div>
                                        <div>
                                            {/* <!-- select option --> */}
                                            <select className="form-select" defaultValue="">
                                                <option value="">Sort by: Featured</option>
                                                <option value="Low to High">Price: Low to High</option>
                                                <option value="High to Low"> Price: High to Low</option>
                                                <option value="Release Date"> Release Date</option>
                                                <option value="Avg. Rating"> Avg. Rating</option>

                                            </select></div>

                                    </div>

                                </div>
                            </div>
                            {/* <!-- row --> */}


                            {!products?.length && (
                                <div className="text-center mt-5">
                                    <h5 className="text-muted">No products available in this category</h5>
                                    <p className="text-muted">Please check back later or explore other categories.</p>
                                </div>
                                // <div className="text-center">
                                //     <div className="spinner-border text-primary" role="status">
                                //         <span className="visually-hidden">Loading...</span>
                                //     </div>
                                // </div>
                            )}
                            {products?.length && (
                                <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                                    {
                                        products.map((item) => {
                                            return (
                                                <Productcard key={item._id} productDetails={item} />
                                            )
                                        })
                                    }
                                </div>
                            )}

                            <div className="row mt-8">
                                <div className="col">
                                    {/* <!-- nav --> */}
                                    <nav>
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link  mx-1 " href="#" aria-label="Previous">
                                                    <i className="feather-icon icon-chevron-left"></i>
                                                </a>
                                            </li>
                                            <li className="page-item "><a className="page-link  mx-1 active" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link mx-1 text-body" href="#">2</a></li>

                                            <li className="page-item"><a className="page-link mx-1 text-body" href="#">...</a></li>
                                            <li className="page-item"><a className="page-link mx-1 text-body" href="#">12</a></li>
                                            <li className="page-item">
                                                <a className="page-link mx-1 text-body" href="#" aria-label="Next">
                                                    <i className="feather-icon icon-chevron-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        </main >
    )
}

export default ProductsPage;