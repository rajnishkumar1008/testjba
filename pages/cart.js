import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <>
      <div className="page-header breadcrumb-wrap mt-50 mb-50">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              <a>Home</a>
            </Link>
            <span></span>Shop
            <span></span>Cart
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="heading-2 mb-10">Your Cart</h1>
                  <div className="jba-cart-product">
                    <div className="p-pic">
                      <img src="/img/shop/prodct-dummy-1.png" alt="img" />
                    </div>
                    <div className="product-dec">
                      <h3>Pearl Diamond Hoops</h3>
                      <span className="sku">SKU : 54FG3FDH31GFH</span>
                      <span className="p-price">
                        15,999 <span className="old-p">₹ 19,500</span>
                      </span>
                      <div className="p-size">
                        <div>
                            <span className="size-head">Size:</span>
                        </div>
                        <div className="fomr-sec">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>16</option>
                          <option value="1">14</option>
                          <option value="2">18</option>
                          <option value="3">12</option>
                        </select>
                        </div>
                      </div>
                      <div className="quantity">
    <a href="#" className="quantity__minus"><span>-</span></a>
    <input name="quantity" type="text" className="quantity__input" value="1" />
    <a href="#" className="quantity__plus"><span>+</span></a>
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

export default Cart;
