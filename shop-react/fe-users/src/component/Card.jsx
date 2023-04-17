import React from "react";

const Card = (props) => {
  const { data, image, name, price, sale, ...others } = props;
  const CheckSale = ` ${
    sale !== ""
      ? "position-absolute bg-primary text-white d-flex align-items-center justify-content-center"
      : ""
  }`;
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
      <div className="collection-img position-relative overflow-hidden">
        <img src={image} alt="anh" className="w-100" />
        <span className={CheckSale}>{sale}</span>
      </div>
      <div className="text-center">
        <div className="text-center">
          <p className="text-capitalize my-1">{name}</p>
          <span className="fw-bold d-block">${price}</span>
          <a href="/#" className="btn btn-primary mt-3">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
