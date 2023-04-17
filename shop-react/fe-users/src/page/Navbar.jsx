import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import iconlogo from "../images/shopping-bag-icon.png";
import { Link } from "react-router-dom";
import CartBox from "./../component/CartBox";
import { useDispatch } from "react-redux";
import { logout } from "../Store/Reducers/Auth";
import menuService from "./../Service/MenuService";
const Navbar = () => {
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    menuService.list().then((res) => setMenu(res.data));
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div className="container">
          <Link
            to=""
            className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
            href="index.html"
          >
            <img src={iconlogo} alt="site icon" className="iconlogo" />
            <span className="text-uppercase fw-lighter ms-2">Attire</span>
          </Link>
          <div className="order-lg-2 nav-btns">
            <div className="dropdown">
              <button
                className="btn position-relative dropdown-toggle dropdown"
                type="button"
                id="cart-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-shopping-cart" />
                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                  5
                </span>
              </button>
              <ul
                className="dropdown-menu fade-in"
                aria-labelledby="cart-dropdown"
              >
                <li>
                  <CartBox />
                </li>
              </ul>
              <button type="button" className="btn position-relative">
                <i className="fa fa-heart" />
                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                  2
                </span>
              </button>
              <button type="button" className="btn position-relative">
                <i className="fa fa-search" />
              </button>
              <button
                className="btn position-relative dropdown-toggle dropdown"
                type="button"
                id="cart-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user-circle" aria-hidden="true" />
              </button>
              <ul
                className="dropdown-menu fade-in wh-100"
                style={{ marginLeft: "100px", width: "10rem" }}
                aria-labelledby="cart-dropdown"
              >
                <li style={{ textAlign: "center" }}>
                  <Link
                    className="d-block text-decoration-none black-text"
                    to="/Login"
                  >
                    Sign in
                  </Link>
                </li>
                <li style={{ textAlign: "center" }}>
                  <Link
                    className="d-block text-decoration-none black-text"
                    onClick={() => dispatch(logout())}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              {menu
                .filter((item) => item.Status === 1 && item.ParentID === 1)
                .map((item) => (
                  <li key={item.id} className="nav-item px-2 py-2">
                    <a
                      className="nav-link text-uppercase text-dark"
                      href={item.Url}
                    >
                      {item.Name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
