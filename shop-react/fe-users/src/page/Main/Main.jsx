import React from "react";
import Headers from "./Headers";
import Collection from "./Collection";
import Special from "./Special";
import Blogs from "./Blogs";
import OutBlogs from "./OutBlogs";
import About from "./About";
import Popular from "./Popular";
import Newletter from "./Newletter";

const Main = () => {
  return (
    <>
      <Headers />
      <Collection />
      <Special />
      <Blogs />
      <OutBlogs />
      <About />
      <Popular />
      <Newletter />
    </>
  );
};

export default Main;
