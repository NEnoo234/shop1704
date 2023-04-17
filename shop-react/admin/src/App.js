import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./Page/Login/Login";
import DefaultLayout from "./Container/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </>
  );
}

export default App;
