// import React, { useState, useEffect } from "react";

function YourComponent() {
  //   const [activeIndex, setActiveIndex] = useState(null);
  //   useEffect(() => {
  //     const allSideMenu = document.querySelectorAll(
  //       "#sidebar .side-menu.top li a"
  //     );
  //     const menuBar = document.querySelector("#content nav .bx.bx-menu");
  //     const sidebar = document.getElementById("sidebar");
  //     const searchButton = document.querySelector(
  //       "#content nav form .form-input button"
  //     );
  //     const searchButtonIcon = document.querySelector(
  //       "#content nav form .form-input button .bx"
  //     );
  //     const searchForm = document.querySelector("#content nav form");
  //     const switchMode = document.getElementById("switch-mode");
  //     const handleItemClick = (e) => {
  //       const li = e.currentTarget.parentElement;
  //       allSideMenu.forEach((i) => {
  //         i.parentElement.className=List.remove("active");
  //       });
  //       li.className=List.add("active");
  //       setActiveIndex(allSideMenu.indexOf(e.currentTarget));
  //     };
  //     const handleMenuClick = () => {
  //       sidebar.className=List.toggle("hide");
  //     };
  //     const handleSearchClick = (e) => {
  //       if (window.innerWidth < 576) {
  //         e.preventDefault();
  //         searchForm.className=List.toggle("show");
  //         if (searchForm.className=List.contains("show")) {
  //           searchButtonIcon.className=List.replace("bx-search", "bx-x");
  //         } else {
  //           searchButtonIcon.className=List.replace("bx-x", "bx-search");
  //         }
  //       }
  //     };
  //     const handleResize = () => {
  //       if (window.innerWidth > 576) {
  //         searchButtonIcon.className=List.replace("bx-x", "bx-search");
  //         searchForm.className=List.remove("show");
  //       }
  //     };
  //     allSideMenu.forEach((item) => {
  //       item.addEventListener("click", handleItemClick);
  //     });
  //     menuBar.addEventListener("click", handleMenuClick);
  //     searchButton.addEventListener("click", handleSearchClick);
  //     if (window.innerWidth < 768) {
  //       sidebar.className=List.add("hide");
  //     } else if (window.innerWidth > 576) {
  //       searchButtonIcon.className=List.replace("bx-x", "bx-search");
  //       searchForm.className=List.remove("show");
  //     }
  //     window.addEventListener("resize", handleResize);
  //     switchMode.addEventListener("change", () => {
  //       if (switchMode.checked) {
  //         document.body.className=List.add("dark");
  //       } else {
  //         document.body.className=List.remove("dark");
  //       }
  //     });
  //     return () => {
  //       allSideMenu.forEach((item) => {
  //         item.removeEventListener("click", handleItemClick);
  //       });
  //       menuBar.removeEventListener("click", handleMenuClick);
  //       searchButton.removeEventListener("click", handleSearchClick);
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  //   return <div>Your JSX code here</div>;
}

export default YourComponent;
