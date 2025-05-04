import React from "react";

function Catcard({thumbnail, name}) {
  return (
    <div className="item">
      <a
        href="pages/shop-grid.html"
        className="text-decoration-none text-inherit"
      >
        <div className="card card-product mb-lg-4">
          <div className="d-flex flex-column justify-content-center align-items-center card-body text-center py-8">
            <img
              src={thumbnail}
              alt="Grocery Ecommerce Template"
              className="mb-3 img-fluid"
            />
            <div className="text-truncate">{name}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Catcard;
