import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login";
import DefautLayout from "./component/DefautLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<DefautLayout />} />
      </Routes>
    </>
  );
}

export default App;
