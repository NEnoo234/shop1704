import React from "react";
import { Link } from "react-router-dom";
import anh1 from "../images/c_shirt-girl.png";
const CartBox = () => {
  return (
    <>
      <div className="cart-box">
        <div className="row">
          <div className="col-12">
            <ul className="cart-items">
              <li>
                <div className="row d-flex align-items-center">
                  <div className="col-4">
                    <img src={anh1} width="80" height="80" alt="Product 1" />
                  </div>
                  <div className="col-8 d-flex align-items-center ">
                    <div className="d-flex flex-column">
                      <p style={{ display: "inline-block" }}>Áo khóa mùa hè</p>
                      <span style={{ display: "inline-block" }}>$10.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="row d-flex align-items-center">
                  <div className="col-4">
                    <img src={anh1} width="80" height="80" alt="Product 1" />
                  </div>
                  <div className="col-8 d-flex align-items-center ">
                    <div className="d-flex flex-column">
                      <p style={{ display: "inline-block" }}>Áo khóa mùa hè</p>
                      <span style={{ display: "inline-block" }}>$10.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="row d-flex align-items-center">
                  <div className="col-4">
                    <img src={anh1} width="80" height="80" alt="Product 1" />
                  </div>
                  <div className="col-8 d-flex align-items-center ">
                    <div className="d-flex flex-column">
                      <p style={{ display: "inline-block" }}>Áo khóa mùa hè</p>
                      <span style={{ display: "inline-block" }}>$10.00</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <label>
                {" "}
                Total:
                <span
                  className="mt-8"
                  style={{ marginLeft: "150px", color: "red" }}
                >
                  $100000
                </span>{" "}
              </label>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <Link to="../Checkout" className="btn btn-primary d-block w-100">
                {/* <Link to="../Checkout">Check out</Link> */} Check out
              </Link>
            </div>
            <div className="col-12 mt-2">
              <Link to="../Carts" className="btn btn-primary d-block w-100">
                Your Carts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBox;
