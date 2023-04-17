import Checkout from "../page/Main/Checkout";
import Main from "../page/Main/Main";
import Product from "../page/Main/Product";
import Carts from "./../page/Main/Carts";

const routes = [
  { path: "", component: <Main /> },
  { path: "/Main", component: <Main /> },
  { path: "/Carts", component: <Carts /> },
  { path: "/Checkout", component: <Checkout /> },
  { path: "/Product", component: <Product /> },
];

export default routes;
