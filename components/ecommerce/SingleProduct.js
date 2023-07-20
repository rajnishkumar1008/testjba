import Link from "next/link";
import React, { useState } from "react";
import QuickView from "./QuickView";
const SingleProduct = () => {
  return (
    <>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link href="#">
              <a>
                <img
                  className="default-img"
                  src="https://shop.jewelsbyanu.com/media/wysiwyg/smartwave/porto/homepage/Rings.png"
                  alt=""
                />
                <img
                  className="hover-img"
                  src="https://shop.jewelsbyanu.com/media/wysiwyg/smartwave/porto/homepage/Earrings.png"
                  alt=""
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="jba-action-cart">
          <div className="product-rate-cover">
          <div className="d-flex">
            <div className="ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
            </div>
        </div>
          
          </div>
          <div className="jba-product-action">
            <a
              aria-label="Quick view"
              className="action-btn hover-up"
              data-bs-toggle="modal"
            >
              <QuickView />
            </a>
            <a aria-label="Add To Wishlist" className="action-btn hover-up">
              <i className="bi bi-heart-fill"></i>
            </a>
            <a aria-label="Compare" className="action-btn hover-up">
              <i className="bi bi-shuffle"></i>
            </a>
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <Link href="/products">
              <a></a>
            </Link>
          </div>
          <h2>
            <Link href="#">
              <a>Pearl Diamond Ring</a>
            </Link>
          </h2>

          <div>
            <span className="font-small text-muted">SKU:JBA12R23</span>
          </div>

          <div className="product-card-bottom">
            <div className="product-price">
              <span>₹ 3000</span>
              <span className="old-price">₹ 3320</span>
            </div>
            <div className="add-cart">
              <a className="add">
                <i className="bi bi-cart4"></i> Add
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
