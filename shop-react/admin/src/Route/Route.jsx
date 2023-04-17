import Main from "../Container/Main";
import Check from "../Page/Check/Check";
import Menu from "../Page/Menu/Menu";
import Product from "../Page/Product/Product";
import Role from "../Page/Role/Role";
import Users from "../Page/Users/Users";
import Home from "./../Page/Home/Home";

const routes = [
  { path: "", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/Users", component: <Users /> },
  { path: "/Main", component: <Main /> },
  { path: "/Role", component: <Role /> },
  { path: "/Menu", component: <Menu /> },
  { path: "/Check", component: <Check /> },
  { path: "/Product", component: <Product /> },
];

export default routes;
