import React from "react";
import anh1 from "../../images/special_product_1.jpg";
import anh2 from "../../images/special_product_2.jpg";
import anh3 from "../../images/special_product_3.jpg";
import anh4 from "../../images/special_product_4.jpg";
import Card from "./../../component/Card";

const Special = () => {
  return (
    <>
      {/* special products */}
      <section id="special" className="py-5">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">
              Special Selection
            </h2>
          </div>
          <div className="special-list row g-0">
            <Card image={anh1} name={"gray shirt"} price={"123"} sale={""} />
            <Card image={anh2} name={"gray shirt"} price={"123"} sale={""} />
            <Card image={anh3} name={"gray shirt"} price={"123"} sale={""} />
            <Card image={anh4} name={"gray shirt"} price={"123"} sale={""} />
          </div>
        </div>
      </section>
      {/* end of special products */}
    </>
  );
};

export default Special;
