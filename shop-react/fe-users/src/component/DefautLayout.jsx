import React from "react";
import Footer from "../page/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../Route/Routes";
import Navbar from "./../page/Navbar";
import { useSelector } from "react-redux";

const DefautLayout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <Navigate to="/Login" />
      ) : (
        <>
          <Navbar />
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.component} />
            ))}
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default DefautLayout;
