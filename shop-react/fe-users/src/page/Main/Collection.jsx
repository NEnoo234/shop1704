import React, { useState, useEffect } from "react";
import Card from "./../../component/Card";
import productService from "../../Service/ProductService";
import ProductCategoryService from "../../Service/ProductCategory";

const Collection = () => {
  const [product, setProduct] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const loadData = () => {
    productService.list().then((res) => setProduct(res.data));
  };
  const loadData1 = () => {
    ProductCategoryService.list().then((res) => setProductCategory(res.data));
  };
  useEffect(() => {
    loadData1();
    loadData();
  }, []);
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
              {productCategory.map((item) => (
                <button type="button" className="btn m-2 text-dark">
                  <span>{item.Name}</span>
                </button>
              ))}
            </div>

            <div className="collection-list mt-4 row gx-0 gy-3">
              {product
                .filter((item) => item.Status === 1)
                .map((item) => (
                  <Card
                    key={item.id}
                    image={item.ImageUrl}
                    name={item.Name}
                    price={item.Price}
                    sale={item.PriceSale > 0 ? "Sale" : ""}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* end of collection */}
    </>
  );
};

export default Collection;
