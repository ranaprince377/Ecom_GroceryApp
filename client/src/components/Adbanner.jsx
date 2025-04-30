import React from "react";

const Adbanner = ({thumbnail,title,subtitle,btntxt}) => {
  return (
    <div className="col">
      <div
        className=" pt-8 px-6 px-xl-8 rounded"
        style={{
          background: `url(${thumbnail}) no-repeat`,
          backgroundSize: "cover",
          height: "470px",
        }}
      >
        <div>
          <h3 className="fw-bold text-white">{title}</h3>
          <p className="text-white">{subtitle}</p>
          <a href="#!" className="btn btn-primary">
           {btntxt} <i className="feather-icon icon-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adbanner;
