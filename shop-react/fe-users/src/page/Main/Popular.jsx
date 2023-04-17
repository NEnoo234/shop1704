import anh1 from "../../images/top_rated_1.jpg";
import anh2 from "../../images/top_rated_2.jpg";
import anh3 from "../../images/top_rated_3.jpg";
import anh4 from "../../images/best_selling_1.jpg";
import anh5 from "../../images/best_selling_2.jpg";
import anh6 from "../../images/best_selling_3.jpg";
import anh7 from "../../images/on_sale_1.jpg";
import anh8 from "../../images/on_sale_2.jpg";
import anh9 from "../../images/on_sale_3.jpg";
const Popular = () => {
  return (
    <>
      {/* popular */}
      <section id="popular" className="py-5">
        <div className="container">
          <div className="title text-center pt-3 pb-5">
            <h2 className="position-relative d-inline-block ms-4">
              Popular Of This Year
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 row g-3">
              <h3 className="fs-5">Top Rated</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh1} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh2} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh3} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 row g-3">
              <h3 className="fs-5">Best Selling</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh4} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh5} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh6} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 row g-3">
              <h3 className="fs-5">On Sale</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh7} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh8} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src={anh9} alt="" className="img-fluid pe-3 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of popular */}
    </>
  );
};

export default Popular;
