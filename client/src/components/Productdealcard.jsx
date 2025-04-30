import React from "react";

const Productdealcard = ({ productDetails }) => {
  const {
    thumbnail,
    name,
    category,
    rating,
    review_count,
    deal_type,
    price,
    discounted_price,
    countdown,
  } = productDetails;
  const validRating = Math.max(0, Math.min(5, rating || 0));
  return (
    <div className="col">
      <div className="card card-product">
        <div className="card-body">
          <div className="text-center position-relative">
            <a href="pages/shop-single.html">
              <img src={thumbnail} alt={name} className="mb-3 img-fluid" />
            </a>
            <div className="card-product-action">
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="modal"
                data-bs-target="#quickViewModal"
              >
                <i
                  className="bi bi-eye"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Quick View"
                ></i>
              </a>
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Wishlist"
              >
                <i className="bi bi-heart"></i>
              </a>
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Compare"
              >
                <i className="bi bi-arrow-left-right"></i>
              </a>
            </div>
          </div>
          <div className="text-small mb-1">
            <a href="#!" className="text-decoration-none text-muted">
              <small>{category}</small>
            </a>
          </div>
          <h2 className="fs-6">
            <a
              href="pages/shop-single.html"
              className="text-inherit text-decoration-none"
            >
              {name}
            </a>
          </h2>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">${price}</span>
              <span className="text-decoration-line-through text-muted">
                ${discounted_price}
              </span>
            </div>
            <div>
              <small className="text-warning">
                {[...Array(Math.floor(validRating))].map((_, index) => (
                  <i key={index} className="bi bi-star-fill"></i>
                ))}
                {validRating % 1 !== 0 && <i className="bi bi-star-half"></i>}
              </small>
              <span>
                <small>{validRating}</small>
              </span>
            </div>
          </div>
          <div className="d-grid mt-2">
            <a href="#!" className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add to cart
            </a>
          </div>
          <div className="d-flex justify-content-start text-center mt-3">
            <div
              className="deals-countdown w-100"
              data-countdown="2028/10/10 00:00:00"
            >
              <span className="countdown-section">
                <span className="countdown-amount hover-up">{countdown.days}</span>
                <span className="countdown-period"> days </span>
              </span>
              <span className="countdown-section">
                <span className="countdown-amount hover-up">23</span>
                <span className="countdown-period"> {countdown.hours} </span>
              </span>
              <span className="countdown-section">
                <span className="countdown-amount hover-up">23</span>
                <span className="countdown-period"> {countdown.minutes} </span>
              </span>
              <span className="countdown-section">
                <span className="countdown-amount hover-up">09</span>
                <span className="countdown-period"> {countdown.seconds} </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdealcard;
