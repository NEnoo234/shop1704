import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="/#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="/#">
              <i className="bx bxs-dashboard" />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <Link to="../Users">
              <i className="bx bxs-shopping-bag-alt" />
              <span className="text">Người dùng</span>
            </Link>
          </li>
          <li>
            <Link to="../Role">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Phân Quyền</span>
            </Link>
          </li>
          <li>
            <Link to="../Product">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Mặt Hàng</span>
            </Link>
          </li>
          <li>
            <a href="/#">
              <i className="bx bxs-message-dots" />
              <span className="text">Loại Mặt Hàng</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="bx bxs-group" />
              <span className="text">Đơn hàng </span>
            </a>
          </li>
          <li>
            <a href="../Menu">
              <i className="bx bxs-group" />
              <span className="text">Menu </span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="/#">
              <i className="bx bxs-cog" />
              <span className="text">Tài Khoản </span>
            </a>
          </li>
          <li>
            <a href="/#" className="logout">
              <i className="bx bxs-log-out-circle" />
              <span className="text">Đăng xuất</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
    </>
  );
};

export default Sidebar;
