import Link from "next/link";
import React from "react";
const CartItems = () => {
  return (
    <div>
      <div className="jba-cart-product">
        <div className="p-pic">
          <Link href="/products/abc">
            <a>
              <img src="/img/shop/prodct-dummy-1.png" alt="img" />
            </a>
          </Link>
        </div>
        <div className="product-dec">
          <h3>
            <Link href="/products/abc">
              <a>Pearl Diamond Hoops</a>
            </Link>
          </h3>
          <span className="sku">SKU : 54FG3FDH31GFH</span>
          <span className="p-price">
            15,999 <span className="old-p">₹ 19,500</span>
          </span>
          <div className="p-size">
            <div>
              <span className="size-head">Size:</span>
            </div>
            <div className="fomr-sec">
              <select className="form-select">
                <option selected>16</option>
                <option value="1">14</option>
                <option value="2">18</option>
                <option value="3">12</option>
              </select>
            </div>
          </div>
          <div className="quantity">
            <a href="#" className="quantity__minus">
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value="1"
            />
            <a href="#" className="quantity__plus">
              <span>+</span>
            </a>
          </div>
          
        </div>
        <div className="deliver-date">
            <img src="/img/themepic/icons/package.png" alt="package" /> <span>Delivery by- 26th Aug</span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
