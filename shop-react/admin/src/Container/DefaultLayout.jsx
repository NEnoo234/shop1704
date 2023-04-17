import React from "react";
import routes from "./../Route/Route";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DefaultLayout = () => {
  return (
    <>
      <Sidebar />
      <section id="content">
        <Navbar />
        <main>
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.component} />
            ))}
          </Routes>
        </main>
      </section>
    </>
  );
};

export default DefaultLayout;
