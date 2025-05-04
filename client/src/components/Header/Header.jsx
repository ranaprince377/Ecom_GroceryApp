import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const categories = useSelector((state) => state.categories.items);

  return (
    <>
      <div className="border-bottom ">
        <div className="bg-light py-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 text-center text-md-start">
                <span> Super Value Deals - Save more with coupons</span>
              </div>
              <div className="col-6 text-end d-none d-md-block">
                <div className="dropdown selectBox">
                  <a
                    className="dropdown-toggle selectValue text-reset"
                    href="javascript:void(0)"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-1">
                      <svg
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#selectedlang)">
                          <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169"></path>
                          <path
                            d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z"
                            fill="white"
                          ></path>
                          <path
                            d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                            fill="#C8102E"
                          ></path>
                          <path
                            d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z"
                            fill="white"
                          ></path>
                          <path
                            d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z"
                            fill="#C8102E"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="selectedlang">
                            <rect
                              width="16"
                              height="12"
                              fill="white"
                              transform="translate(0 0.5)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    English
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">
                        {" "}
                        <span className="me-1">
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#selectedlang)">
                              <path
                                d="M0 0.5H16V12.5H0V0.5Z"
                                fill="#012169"
                              ></path>
                              <path
                                d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z"
                                fill="white"
                              ></path>
                              <path
                                d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                                fill="#C8102E"
                              ></path>
                              <path
                                d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z"
                                fill="white"
                              ></path>
                              <path
                                d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z"
                                fill="#C8102E"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="selectedlang">
                                <rect
                                  width="16"
                                  height="12"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <span className="me-2">
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_5543_19751)">
                              <path
                                d="M0 8.5H16V12.5H0V8.5Z"
                                fill="#FFCE00"
                              ></path>
                              <path
                                d="M0 0.5H16V4.5H0V0.5Z"
                                fill="black"
                              ></path>
                              <path
                                d="M0 4.5H16V8.5H0V4.5Z"
                                fill="#DD0000"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_5543_19751">
                                <rect
                                  width="16"
                                  height="12"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        Deutsch
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            <div className="row w-100 align-items-center gx-lg-2 gx-0">
              <div className="col-xxl-2 col-lg-3">
                <Link className="navbar-brand d-none d-lg-block" to={"/"}>
                  <img
                    src="/assets/images/logo/freshcart-logo.svg"
                    alt="eCommerce HTML Template"
                  />
                </Link>
                <div className="d-flex justify-content-between w-100 d-lg-none">
                  <Link className="navbar-brand" to={"/"}>
                    <img
                      src="/assets/images/logo/freshcart-logo.svg"
                      alt="eCommerce HTML Template"
                    />
                  </Link>

                  <div className="d-flex align-items-center lh-1">
                    <div className="list-inline me-4">
                      <div className="list-inline-item">
                        <a
                          href="#!"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#userModal"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </a>
                      </div>
                      <div className="list-inline-item">
                        <a
                          className="text-muted position-relative "
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          href="#offcanvasExample"
                          role="button"
                          aria-controls="offcanvasRight"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-shopping-bag"
                          >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                          </svg>
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                            1
                            <span className="visually-hidden">
                              unread messages
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <button
                      className="navbar-toggler collapsed"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#navbar-default"
                      aria-controls="navbar-default"
                      aria-label="Toggle navigation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-text-indent-left text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
                <form action="#">
                  <div className="input-group ">
                    <input
                      className="form-control rounded"
                      type="search"
                      placeholder="Search for products"
                    />
                    <span className="input-group-append">
                      <button
                        className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                        type="button"
                      >
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
                          className="feather feather-search"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              <div className="col-md-2 col-xxl-3 d-none d-lg-block">
                <button
                  type="button"
                  className="btn  btn-outline-gray-400 text-muted"
                  data-bs-toggle="modal"
                  data-bs-target="#locationModal"
                >
                  <i className="feather-icon icon-map-pin me-2"></i>Location
                </button>
              </div>
              <div className="col-md-2 col-xxl-2 text-end d-none d-lg-block">
                <div className="list-inline">
                  <div className="list-inline-item me-5">
                    <a
                      href="pages/shop-wishlist.html"
                      className="text-muted position-relative"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        5
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </div>
                  <div className="list-inline-item me-5">
                    <a
                      href="#!"
                      className="text-muted"
                      data-bs-toggle="modal"
                      data-bs-target="#userModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </a>
                  </div>
                  <div className="list-inline-item">
                    <a
                      className="text-muted position-relative "
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      href="#offcanvasExample"
                      role="button"
                      aria-controls="offcanvasRight"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shopping-bag"
                      >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        1
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4 "
          aria-label="Offcanvas navbar large"
        >
          <div className="container">
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="navbar-default"
              aria-labelledby="navbar-defaultLabel"
            >
              <div className="offcanvas-header pb-1">
                <a href="index.html">
                  {" "}
                  <img
                    src="/assets/images/logo/freshcart-logo.svg"
                    alt="eCommerce HTML Template"
                  />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="d-block d-lg-none mb-4">
                  <form action="#">
                    <div className="input-group ">
                      <input
                        className="form-control rounded"
                        type="search"
                        placeholder="Search for products"
                      />
                      <span className="input-group-append">
                        <button
                          className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                          type="button"
                        >
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
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </button>
                      </span>
                    </div>
                  </form>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="btn  btn-outline-gray-400 text-muted w-100 "
                      data-bs-toggle="modal"
                      data-bs-target="#locationModal"
                    >
                      <i className="feather-icon icon-map-pin me-2"></i>Pick
                      Location
                    </button>
                  </div>
                </div>
                <div className="d-block d-lg-none mb-4">
                  <a
                    className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-grid"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                    </span>{" "}
                    All Departments
                  </a>
                  <div className="collapse mt-2" id="collapseExample">
                    <div className="card card-body">
                      <ul className="mb-0 list-unstyled">
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/shop-grid.html"
                          >
                            Dairy, Bread &amp; Eggs
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/shop-grid.html"
                          >
                            Snacks &amp; Munchies
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/shop-grid.html"
                          >
                            Fruits &amp; Vegetables
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/shop-grid.html"
                          >
                            Cold Drinks &amp; Juices
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/shop-grid.html"
                          >
                            Breakfast &amp; Instant Food
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/shop-grid.html"
                          >
                            Bakery &amp; Biscuits
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/shop-grid.html"
                          >
                            Chicken, Meat &amp; Fish
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="">
                  <ul className="navbar-nav align-items-center ">
                    <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                      <a
                        className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-grid"
                          >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                        </span>{" "}
                        Categories
                      </a>

                      <div className=" dropdown-menu pb-0">
                        <div className="row p-2 p-lg-4">
                          {
                            categories.map((cat) => {
                              if (!cat.subCategories?.length) return;
                              return (
                                <div key={cat._id} className="col-lg-3 col-12 mb-4 mb-lg-0">
                                  <h6 className="text-primary ps-3">
                                    {cat.name}
                                  </h6>
                                  {cat.subCategories.map((subcat) => (
                                    <Link
                                      key={subcat._id}
                                      className="dropdown-item"
                                      to={`/category/${cat.slug}/cid/${cat._id}/sid/${subcat._id}`}
                                    >
                                      {subcat.name}
                                    </Link>
                                  ))}
                                </div>
                              );
                            })
                          }
                          <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                            <div className="card border-0">
                              <img
                                src="/assets/images/banner/menu-banner.jpg"
                                alt="eCommerce HTML Template"
                                className="img-fluid"
                              />
                              <div className="position-absolute ps-6 mt-8">
                                <h5 className=" mb-0 ">
                                  Dont miss this <br />
                                  offer today.
                                </h5>
                                <a
                                  href="#"
                                  className="btn btn-primary btn-sm mt-3"
                                >
                                  Shop Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item w-100 w-lg-auto">
                      <Link
                        className="nav-link"
                        to="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown w-100 w-lg-auto">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Account
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="pages/signin.html">
                            Sign in
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="pages/signup.html">
                            Signup
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/forgot-password.html"
                          >
                            Forgot Password
                          </a>
                        </li>
                        <li className="dropdown-submenu dropend">
                          <a
                            className="dropdown-item dropdown-list-group-item dropdown-toggle"
                            href="#"
                          >
                            My Account
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages/account-orders.html"
                              >
                                Orders
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages/account-settings.html"
                              >
                                Settings
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages/account-address.html"
                              >
                                Address
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages/account-payment-method.html"
                              >
                                Payment Method
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages/account-notification.html"
                              >
                                Notification
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="userModal"
        tabIndex="-1"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                Sign Up
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter Your Name"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email address"
                    autoComplete="username"
                    required=""
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    autoComplete="current-password"
                    required=""
                  />
                  <small className="form-text">
                    By Signup, you agree to our{" "}
                    <a href="#!">Terms of Service</a> &{" "}
                    <a href="#!">Privacy Policy</a>
                  </small>
                </div>

                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              Already have an account? <a href="#">Sign in</a>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom">
          <div className="text-start">
            <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
              Shop Cart
            </h5>
            <small>Location in 382480</small>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="">
            {/* Alert */}
            <div className="alert alert-danger p-2" role="alert">
              You've got FREE delivery. Start{" "}
              <a href="#!" className="alert-link">
                checkout now!
              </a>
            </div>
            <ul className="list-group list-group-flush">
              {/* List Group */}
              <li className="list-group-item py-3 ps-0 border-top">
                {/* Row */}
                <div className="row align-items-center">
                  <div className="col-6 col-md-6 col-lg-7">
                    <div className="d-flex">
                      <img
                        src="/assets/images/products/product-img-1.jpg"
                        alt="Ecommerce"
                        className="icon-shape icon-xxl"
                      />
                      <div className="ms-3">
                        {/* Title */}
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit"
                        >
                          <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                        </a>
                        <span>
                          <small className="text-muted">.98 / lb</small>
                        </span>
                        {/* Text */}
                        <div className="mt-2 small lh-1">
                          {" "}
                          <a
                            href="#!"
                            className="text-decoration-none text-inherit"
                          >
                            {" "}
                            <span className="me-1 align-text-bottom">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash-2 text-success"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                            <span className="text-muted">Remove</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Input Group */}
                  <div className="col-4 col-md-3 col-lg-3">
                    {/* Input */}
                    <div className="input-group input-spinner  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus  btn  btn-sm "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        defaultValue="1"
                        name="quantity"
                        className="quantity-field form-control-sm form-input   "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus btn btn-sm "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  {/* Price */}
                  <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span className="fw-bold">$5.00</span>
                  </div>
                </div>
              </li>
              {/* List Group */}
              <li className="list-group-item py-3 ps-0">
                {/* Row */}
                <div className="row align-items-center">
                  <div className="col-6 col-md-6 col-lg-7">
                    <div className="d-flex">
                      <img
                        src="/assets/images/products/product-img-2.jpg"
                        alt="Ecommerce"
                        className="icon-shape icon-xxl"
                      />
                      <div className="ms-3">
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit"
                        >
                          <h6 className="mb-0">NutriChoice Digestive </h6>
                        </a>
                        <span>
                          <small className="text-muted">250g</small>
                        </span>
                        {/* Text */}
                        <div className="mt-2 small lh-1">
                          {" "}
                          <a
                            href="#!"
                            className="text-decoration-none text-inherit"
                          >
                            {" "}
                            <span className="me-1 align-text-bottom">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash-2 text-success"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                            <span className="text-muted">Remove</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input Group*/}
                  <div className="col-4 col-md-3 col-lg-3">
                    {/* Input */}
                    <div className="input-group input-spinner  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus  btn  btn-sm "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        defaultValue="1"
                        name="quantity"
                        className="quantity-field form-control-sm form-input   "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus btn btn-sm "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  {/* Price */}
                  <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span className="fw-bold text-danger">$20.00</span>
                    <div className="text-decoration-line-through text-muted small">
                      $26.00
                    </div>
                  </div>
                </div>
              </li>
              {/* list group */}
              <li className="list-group-item py-3 ps-0">
                {/* row */}
                <div className="row align-items-center">
                  <div className="col-6 col-md-6 col-lg-7">
                    <div className="d-flex">
                      <img
                        src="/assets/images/products/product-img-3.jpg"
                        alt="Ecommerce"
                        className="icon-shape icon-xxl"
                      />
                      <div className="ms-3">
                        {/* title */}
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit"
                        >
                          <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                        </a>
                        <span>
                          <small className="text-muted">1 kg</small>
                        </span>
                        {/* text */}
                        <div className="mt-2 small lh-1">
                          {" "}
                          <a
                            href="#!"
                            className="text-decoration-none text-inherit"
                          >
                            {" "}
                            <span className="me-1 align-text-bottom">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash-2 text-success"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                            <span className="text-muted">Remove</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* input group */}
                  <div className="col-4 col-md-3 col-lg-3">
                    {/* input */}
                    {/* input */}
                    <div className="input-group input-spinner  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus  btn  btn-sm "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        defaultValue="1"
                        name="quantity"
                        className="quantity-field form-control-sm form-input   "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus btn btn-sm "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span className="fw-bold">$15.00</span>
                    <div className="text-decoration-line-through text-muted small">
                      $20.00
                    </div>
                  </div>
                </div>
              </li>
              {/* list group */}
              <li className="list-group-item py-3 ps-0">
                {/* row */}
                <div className="row align-items-center">
                  <div className="col-6 col-md-6 col-lg-7">
                    <div className="d-flex">
                      <img
                        src="/assets/images/products/product-img-4.jpg"
                        alt="Ecommerce"
                        className="icon-shape icon-xxl"
                      />
                      <div className="ms-3">
                        {/* title */}
                        {/* title */}
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit"
                        >
                          <h6 className="mb-0">Onion Flavour Potato</h6>
                        </a>
                        <span>
                          <small className="text-muted">250g</small>
                        </span>
                        {/* text */}
                        <div className="mt-2 small lh-1">
                          {" "}
                          <a
                            href="#!"
                            className="text-decoration-none text-inherit"
                          >
                            {" "}
                            <span className="me-1 align-text-bottom">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash-2 text-success"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                            <span className="text-muted">Remove</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* input group */}
                  <div className="col-4 col-md-3 col-lg-3">
                    {/* input */}
                    {/* input */}
                    <div className="input-group input-spinner  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus  btn  btn-sm "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        defaultValue="1"
                        name="quantity"
                        className="quantity-field form-control-sm form-input   "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus btn btn-sm "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span className="fw-bold">$15.00</span>
                    <div className="text-decoration-line-through text-muted small">
                      $20.00
                    </div>
                  </div>
                </div>
              </li>
              {/* list group */}
              <li className="list-group-item py-3 ps-0 border-bottom">
                {/* row */}
                <div className="row align-items-center">
                  <div className="col-6 col-md-6 col-lg-7">
                    <div className="d-flex">
                      <img
                        src="/assets/images/products/product-img-5.jpg"
                        alt="Ecommerce"
                        className="icon-shape icon-xxl"
                      />
                      <div className="ms-3">
                        {/* title */}
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit"
                        >
                          <h6 className="mb-0">Salted Instant Popcorn </h6>
                        </a>
                        <span>
                          <small className="text-muted">100g</small>
                        </span>
                        {/* text */}
                        <div className="mt-2 small lh-1">
                          {" "}
                          <a
                            href="#!"
                            className="text-decoration-none text-inherit"
                          >
                            {" "}
                            <span className="me-1 align-text-bottom">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash-2 text-success"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                            <span className="text-muted">Remove</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* input group */}
                  <div className="col-4 col-md-3 col-lg-3">
                    {/* input */}
                    {/* input */}
                    <div className="input-group input-spinner  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus  btn  btn-sm "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        defaultValue="1"
                        name="quantity"
                        className="quantity-field form-control-sm form-input   "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus btn btn-sm "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span className="fw-bold">$15.00</span>
                    <div className="text-decoration-line-through text-muted small">
                      $25.00
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* btn */}
            <div className="d-flex justify-content-between mt-4">
              <a href="#!" className="btn btn-primary">
                Continue Shopping
              </a>
              <a href="#!" className="btn btn-dark">
                Update Cart
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="locationModal"
        tabIndex="-1"
        aria-labelledby="locationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-6">
              <div className="d-flex justify-content-between align-items-start ">
                <div>
                  <h5 className="mb-1" id="locationModalLabel">
                    Choose your Delivery Location
                  </h5>
                  <p className="mb-0 small">
                    Enter your address and we will specify the offer you area.{" "}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="my-5">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search your area"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">Select Location</h6>
                <a
                  href="#"
                  className="btn btn-outline-gray-400 text-muted btn-sm"
                >
                  Clear All
                </a>
              </div>
              <div>
                <div data-simplebar style={{ height: '300px' }}>
                  <div className="list-group list-group-flush">
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active"
                    >
                      <span>Alabama</span>
                      <span>Min:$20</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Alaska</span>
                      <span>Min:$30</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Arizona</span>
                      <span>Min:$50</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>California</span>
                      <span>Min:$29</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Colorado</span>
                      <span>Min:$80</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Florida</span>
                      <span>Min:$90</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Arizona</span>
                      <span>Min:$50</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>California</span>
                      <span>Min:$29</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Colorado</span>
                      <span>Min:$80</span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Florida</span>
                      <span>Min:$90</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Modal */}
      <div
        className="modal fade"
        id="quickViewModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-8">
              <div className="position-absolute top-0 end-0 me-3 mt-3">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  {/* img slide */}
                  <div className="product productModal" id="productModal">
                    <div
                      className="zoom"
                      onMouseMove={(event) => zoom(event)}
                      style={{ backgroundImage: "url(assets/images/products/product-single-img-1.jpg)" }} >
                      {/* img */}
                      <img
                        src="/assets/images/products/product-single-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onMouseMove={(event) => zoom(event)}
                        style={{
                          backgroundIimage: "url(assets/images/products/product-single-img-2.jpg)"
                        }}>
                        {/* img */}
                        <img
                          src="/assets/images/products/product-single-img-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onMouseMove={(event) => zoom(event)}
                        style={{
                          backgroundImage: "url(assets/images/products/product-single-img-3.jpg)"
                        }}>
                        {/* img */}
                        <img
                          src="/assets/images/products/product-single-img-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onMouseMove={(event) => zoom(event)}
                        style={{
                          backgroundImage: "url(assets/images/products/product-single-img-4.jpg)"
                        }} >
                        {/* img */}
                        <img
                          src="/assets/images/products/product-single-img-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* product tools */}
                  <div className="product-tools">
                    <div
                      className="thumbnails row g-3"
                      id="productModalThumbnails"
                    >
                      <div className="col-3 tns-nav-active">
                        <div className="thumbnails-img">
                          {/* img */}
                          <img
                            src="/assets/images/products/product-single-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          {/* img */}
                          <img
                            src="/assets/images/products/product-single-img-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          {/* img */}
                          <img
                            src="/assets/images/products/product-single-img-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          {/* img */}
                          <img
                            src="/assets/images/products/product-single-img-4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ps-lg-8 mt-6 mt-lg-0">
                    <a href="#!" className="mb-4 d-block">
                      Bakery Biscuits
                    </a>
                    <h2 className="mb-1 h1">Napolitanke Ljesnjak</h2>
                    <div className="mb-4">
                      <small className="text-warning">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </small>
                      <a href="#" className="ms-2">
                        (30 reviews)
                      </a>
                    </div>
                    <div className="fs-4">
                      <span className="fw-bold text-dark">$32</span>
                      <span className="text-decoration-line-through text-muted">
                        $35
                      </span>
                      <span>
                        <small className="fs-6 ms-2 text-danger">26% Off</small>
                      </span>
                    </div>
                    <hr className="my-6" />
                    <div className="mb-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        250g
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        500g
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        1kg
                      </button>
                    </div>
                    <div>
                      {/* input */}
                      {/* input */}
                      <div className="input-group input-spinner  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus  btn  btn-sm "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max="10"
                          defaultValue="1"
                          name="quantity"
                          className="quantity-field form-control-sm form-input   "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus btn btn-sm "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                      <div className="col-lg-4 col-md-5 col-6 d-grid">
                        {/* button */}
                        {/* btn */}
                        <button type="button" className="btn btn-primary">
                          <i className="feather-icon icon-shopping-bag me-2"></i>
                          Add to cart
                        </button>
                      </div>
                      <div className="col-md-4 col-5">
                        {/* btn */}
                        <a
                          className="btn btn-light"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label="Compare"
                        >
                          <i className="bi bi-arrow-left-right"></i>
                        </a>
                        <a
                          className="btn btn-light"
                          href="#!"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label="Wishlist"
                        >
                          <i className="feather-icon icon-heart"></i>
                        </a>
                      </div>
                    </div>
                    <hr className="my-6" />
                    <div>
                      <table className="table table-borderless">
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
                                01 day shipping.
                                <span className="text-muted">
                                  ( Free pickup today)
                                </span>
                              </small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
