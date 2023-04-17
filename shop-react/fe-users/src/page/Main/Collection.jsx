import React from "react";
import anh1 from "../../images/c_formal_gray_shirt.png";
import anh2 from "../../images/c_pant_girl.png";
import anh3 from "../../images/c_polo-shirt.png";
import anh4 from "../../images/c_t-shirt_men.png";
import anh5 from "../../images/c_tunic-shirt_girl.png";
import anh6 from "../../images/c_undershirt.png";
import anh7 from "../../images/c_western-shirt.png";
import anh8 from "../../images/c_shirt-girl.png";
import Card from "../../component/Card";

const Collection = () => {
  return (
    <>
      {/* collection */}
      <section id="collection" className="py-5">
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">New Collection</h2>
          </div>
          <div className="row g-0">
            <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
              <button
                type="button"
                className="btn m-2 text-dark active-filter-btn"
              >
                All
              </button>
              <button type="button" className="btn m-2 text-dark">
                Best Sellers
              </button>
              <button type="button" className="btn m-2 text-dark">
                Featured
              </button>
              <button type="button" className="btn m-2 text-dark">
                New Arrival
              </button>
            </div>
            <div className="collection-list mt-4 row gx-0 gy-3">
              <Card
                image={anh1}
                name={"gray shirt"}
                price={"123"}
                sale={"Sale"}
              />
              <Card image={anh2} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh3} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh5} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh4} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh6} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh7} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh8} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh5} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh4} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh4} name={"gray shirt"} price={"123"} sale={""} />
              <Card image={anh6} name={"gray shirt"} price={"123"} sale={""} />
            </div>
          </div>
        </div>
      </section>
      {/* end of collection */}
    </>
  );
};

export default Collection;
