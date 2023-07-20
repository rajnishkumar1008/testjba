import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import SingleProduct from "../../components/ecommerce/SingleProduct";
const Index = () => {
  return (
    <>
      <section className="pt-40">
        <div className="container">
          <div className="product-header">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="header-h">Rings</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="filter-bg">
            <div className="row">
              <div className="col-lg-12">
                <div className="jab-tags-filter">
                  <ul className="jab-tags-list">
                    <li className="hover-up">
                      <a>
                        Rings <RiCloseCircleLine />
                      </a>
                    </li>
                    <li className="hover-up">
                      <a>
                        ₹ 5000 - ₹ 10000 <RiCloseCircleLine />
                      </a>
                    </li>
                    <li className="hover-up">
                      <a>
                        ₹ 5000 - ₹ 10000 <RiCloseCircleLine />
                      </a>
                    </li>
                    <li className="hover-up last">
                      <a>Clear All</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-60 pt-20">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-9 col-lg-8">
                <div className="list-of-products-p ">
                    <div className="row">
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                        <div className="col-lg-4">
                            <SingleProduct />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="prodect-filter-wrper sticky-top">
                <div className="fliter-head">
                  <h3>Filter By</h3>
                </div>
               <div className="h-600">
               <div className="filter-list-sec">
                  <h4>Sort By</h4>

                  <div className="form-check jba-checkbox">
                    <div >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="0"
                      />
                      <label className="form-check-label" htmlFor="0">
                        Latest
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="1"
                      />
                      <label className="form-check-label" htmlFor="1">
                      Price High to Low
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="2"
                      />
                      <label className="form-check-label" htmlFor="2">
                      Price Low to High
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="3"
                      />
                      <label className="form-check-label" htmlFor="3">
                      Discount
                      </label>
                    </div>
                  </div>
                </div>
                <div className="filter-list-sec">
                  <h4>Price</h4>

                  <div className="form-check jba-checkbox">
                    <div >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="p-0"
                      />
                      <label className="form-check-label" htmlFor="p-0">
                        Latest
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="p-1"
                      />
                      <label className="form-check-label" htmlFor="p-1">
                      ₹5000-₹10000<span>(50)</span>
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="p-2"
                      />
                      <label className="form-check-label" htmlFor="p-2">
                      ₹10,001-₹15,000<span>(250)</span>
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="p-3"
                      />
                      <label className="form-check-label" htmlFor="p-3">
                      ₹15,001-₹20,000<span>(530)</span>
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="p-4"
                      />
                      <label className="form-check-label" htmlFor="p-4">
                      ₹20,001-₹30,00<span>(350)</span>
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="p-5"
                      />
                      <label className="form-check-label" htmlFor="p-5">
                      30,000-₹50.000<span>(150)</span>
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="p-6"
                      />
                      <label className="form-check-label" htmlFor="p-6">
                      ₹50,001 above<span>(278)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="filter-list-sec">
                  <h4>Product</h4>

                  <div className="form-check jba-checkbox">
                    <div >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="01"
                      />
                      <label className="form-check-label" htmlFor="01">
                        Latest
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="02"
                      />
                      <label className="form-check-label" htmlFor="02">
                      Ring
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="03"
                      />
                      <label className="form-check-label" htmlFor="03">
                      Price Low to High
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="04"
                      />
                      <label className="form-check-label" htmlFor="04">
                      Discount
                      </label>
                    </div>
                  </div>
                </div>
                <div className="filter-list-sec">
                  <h4>Material</h4>

                  <div className="form-check jba-checkbox">
                    <div >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="001"
                      />
                      <label className="form-check-label" htmlFor="001">
                        Gold
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="002"
                      />
                      <label className="form-check-label" htmlFor="002">
                     White Gold
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="003"
                      />
                      <label className="form-check-label" htmlFor="003">
                     Rose Gold
                      </label>
                    </div>
                   
                  </div>
                </div>
                <div className="filter-list-sec">
                  <h4>Shop For</h4>

                  <div className="form-check jba-checkbox">
                    <div >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="0001"
                      />
                      <label className="form-check-label" htmlFor="0001">
                      Ring
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="0002"
                      />
                      <label className="form-check-label" htmlFor="0002">
                      Bracelet
                      </label>
                    </div>
                   
                   
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       


      
    </>
  );
};

export default Index;
