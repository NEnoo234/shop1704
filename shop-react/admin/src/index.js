import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import "./Style/style.css";
import "../src/Style/YourComponent";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LoadingBar from "react-redux-loading-bar";
import store, { persistor } from "./Store/index";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div className="fixed-top w-100" style={{ zIndex: "100" }}>
          <LoadingBar
            updateTime={100}
            className="bg-danger"
            style={{ height: "2px" }}
          />
        </div>
        <ToastContainer theme="colored" />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();
