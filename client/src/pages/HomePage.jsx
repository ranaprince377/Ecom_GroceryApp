import React, { useEffect } from "react";
import Catcard from "../components/Catcard";
import Productcard from "../components/Productcard";
import Productdealcard from "../components/Productdealcard";
import Adbanner from "../components/Adbanner";
import featuredCat from "../data/featuredCat";
import popularProd from "../data/popularProducts";
import productDeal from "../data/productDeal";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../features/productSlice";
import Slider from "react-slick";

const HomePage = () => {
  const categories = useSelector((state) => state.categories.items);
  const categoryLoading = useSelector((state) => state.categories.loading);

  const products = useSelector((state) => state.products.products);
  const productsLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);


  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
  };

  return (
    <main>
      <section className="mt-8">
        <div className="container">
          <div className="hero-slider ">
            <div
              style={{
                background: "url(assets/images/slider/slide-1.jpg)no-repeat",
                backgroundSize: "cover",
                borderRadius: ".5rem",
                backgroundPosition: "center",
              }}
            >
              <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                <span className="badge text-bg-warning">
                  Opening Sale Discount 50%
                </span>

                <h2 className="text-dark display-5 fw-bold mt-4">
                  SuperMarket For Fresh Grocery{" "}
                </h2>
                <p className="lead">
                  Introduced a new model for online grocery shopping and
                  convenient home delivery.
                </p>
                <a href="#!" className="btn btn-dark mt-3">
                  Shop Now{" "}
                  <i className="feather-icon icon-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
            <div
              className=" "
              style={{
                background: "url(assets/images/slider/slider-2.jpg)no-repeat",
                backgroundSize: "cover",
                borderRadius: ".5rem",
                backgroundPosition: "center",
              }}
            >
              <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                <span className="badge text-bg-warning">
                  Free Shipping - orders over $100
                </span>
                <h2 className="text-dark display-5 fw-bold mt-4">
                  Free Shipping on <br /> orders over{" "}
                  <span className="text-primary">$100</span>
                </h2>
                <p className="lead">
                  Free Shipping to First-Time Customers Only, After promotions
                  and discounts are applied.
                </p>
                <a href="#!" className="btn btn-dark mt-3">
                  Shop Now{" "}
                  <i className="feather-icon icon-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section Start*/}
      <section className="mb-lg-10 mt-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <h3 className="mb-0">Featured Categories</h3>
            </div>
          </div>
          {categoryLoading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {!categoryLoading && (
            <Slider {...settings} className="category-sliders">
              {categories.map((cat) => (
                <Catcard key={cat._id} categoryDetails={cat} />
              ))}
            </Slider>
          )}

        </div>
      </section>
      {/* Category Section End*/}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-lg-0">
              <div>
                <div
                  className="py-10 px-8 rounded"
                  style={{
                    background:
                      "url(assets/images/banner/grocery-banner.png)no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
                    <p className="mb-4">
                      Get Upto <span className="fw-bold">30%</span> Off
                    </p>
                    <a href="#!" className="btn btn-dark">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div>
                <div
                  className="py-10 px-8 rounded"
                  style={{
                    background:
                      "url(assets/images/banner/grocery-banner-2.jpg)no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                    <p className="mb-4">
                      Get Upto <span className="fw-bold">25%</span> Off
                    </p>
                    <a href="#!" className="btn btn-dark">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Products Start*/}
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <h3 className="mb-0">Popular Products</h3>
            </div>
          </div>
          {productsLoading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {!productsLoading && (
            <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
              {
                products.map((item) => {
                  return (
                    <Productcard key={item._id} productDetails={item} />
                  )
                })
              }
            </div>
          )}
        </div>
      </section>
      {/* Popular Products End*/}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-6">
              <h3 className="mb-0">Daily Best Sells</h3>
            </div>
          </div>
          <div className="table-responsive-xl pb-6">
            <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
              {<Adbanner
                thumbnail="assets/images/banner/banner-deal.jpg"
                title="100% Organic Coffee Beans."
                subtitle="Get the best deal before close."
                btntxt="Shop Now"
              />}
              {
                productDeal.map((item) => {
                  return (
                    <Productdealcard key={item._id} productDetails={item} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="mb-8 mb-xl-0">
                <div className="mb-6">
                  <img src="assets/images/icons/clock.svg" alt="" />
                </div>
                <h3 className="h5 mb-3">10 minute grocery now</h3>
                <p>
                  Get your order delivered to your doorstep at the earliest
                  from FreshCart pickup stores near you.
                </p>
              </div>
            </div>
            <div className="col-md-6  col-lg-3">
              <div className="mb-8 mb-xl-0">
                <div className="mb-6">
                  <img src="assets/images/icons/gift.svg" alt="" />
                </div>
                <h3 className="h5 mb-3">Best Prices & Offers</h3>
                <p>
                  Cheaper prices than your local supermarket, great cashback
                  offers to top it off. Get best pricess & offers.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-8 mb-xl-0">
                <div className="mb-6">
                  <img src="assets/images/icons/package.svg" alt="" />
                </div>
                <h3 className="h5 mb-3">Wide Assortment</h3>
                <p>
                  Choose from 5000+ products across food, personal care,
                  household, bakery, veg and non-veg & other categories.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-8 mb-xl-0">
                <div className="mb-6">
                  <img src="assets/images/icons/refresh-cw.svg" alt="" />
                </div>
                <h3 className="h5 mb-3">Easy Returns</h3>
                <p>
                  Not satisfied with a product? Return it at the doorstep &
                  get a refund within hours. No questions asked
                  <a href="#!">policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
