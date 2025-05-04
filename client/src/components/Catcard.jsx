import React from "react";
import { Link } from "react-router-dom";

function Catcard({categoryDetails}) {
  const {thumbnail, name, slug, _id} = categoryDetails;
  return (
    <div className="item">
      <Link
        to={`category/${slug}/cid/${_id}`}
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
      </Link>
    </div>
  );
}

export default Catcard;
