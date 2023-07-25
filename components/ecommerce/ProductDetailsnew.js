import React, { useState } from "react";
import RelatedSlider from "../sliders/Related";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Table
} from "reactstrap";
import ThumbSlider from "../sliders/Thumb";

const ProductDetailsnew = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="mt-50 mb-50">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="jba-product-main">
              <div className="row mb-50  mt-30">
                <div className="col-md-5 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                  <div className="detail-gallery sticky-top-product">
                    <span className="zoom-icon">
                      <i className="bi bi-search"></i>
                    </span>

                    <div className="product-image-slider">
                      <ThumbSlider />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="jba-detail-single  pr-30 pl-30">
                    <div className="prodcts-single-rating">
                      <div className="jba-rating-product">
                        <div className="rating-star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i>
                          <span className="rating-fig">4.8 | </span>
                          <span className="review-prod">Review (148)</span>
                        </div>
                      </div>
                    </div>
                    <div className="jba-single-dec">
                      <div className="heading">
                        <h1>Pearl Diamond Hoops</h1>
                        <span>SKU#JBAM09</span>
                        {/* <p>
                          We offer a six month warranty for all our products,
                          including Custom made items. warranty for all our
                          products warranty for all our products.
                        </p> */}
                      </div>
                    </div>
                    <div className="jab-product-option">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="Size" className="form-label">
                            Select Size
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>select options</option>
                            <option value="1">14(54.0mm)-Only 2 Left</option>
                            <option value="2">21 (60.9 mm)-Only 1 Left</option>
                            <option value="3">14(54.0mm)-Only 2 Left</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Size" className="form-label">
                            Expected Delivery
                          </label>
                          <div className="input-group mb-3">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Enter Pincode"
                            />
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              id="button-addon2"
                            >
                              Check
                            </button>
                            <div className="pin-hide-show">
                              <a href="#">
                                <span className="top">
                                  Free Delivery by 25th Aug
                                </span>
                                <span className="info">
                                  For Early Delivery.<a>Contact Us</a>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="jab-product-sigle-price">
                      <span className="orginal-price">₹ 3000</span>
                      <span className="dis-price">₹ 3320</span>
                      <div className="offer-exp">Offer Expire in 1 day</div>
                    </div>
                    <div className="add-t-cart">
                      <button
                        className="btn btn-1"
                        type="button"
                        id="button-addon1"
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-2"
                        type="button"
                        id="button-addon2"
                      >
                        Buy Now
                      </button>
                    </div>
                    <div className="jba-our-exp">
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted>
                            <source
                              src="/videos/Exuisite-Craftmanship.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <span>
                          Exquisite <br /> Craftsmanship
                        </span>
                      </div>
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted>
                            <source
                              src="/videos/Bis-logo.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <span>
                          100% Hallmarked <br /> Jewelry
                        </span>
                      </div>
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted>
                            <source
                              src="/videos/Giftworthy-packaging.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <span>
                          Gift-Worthy <br /> Packaging
                        </span>
                      </div>
                    </div>
                    <div className="jba-prod-dec-bootm-acc">
                      <Accordion
                        className="jab-accordion"
                        open={open}
                        toggle={toggle}
                      >
                        <AccordionItem>
                          <AccordionHeader targetId="1" tag="h3">
                            Special Offers
                          </AccordionHeader>
                          <AccordionBody accordionId="1">
                            <div className="jba-discount-info-box">
                              <div className="jba-discount-info">
                                <span className="h-tag-h">FLAT20</span>
                                <span className="h-tag">
                                  Get 20% OFF on First Purchase
                                </span>
                                <span className="h-tag-term">
                                  <a href="#"> Term & Conditions</a>
                                </span>
                              </div>
                              <div className="jba-discount-info">
                                <span className="h-tag-h">FESTIVE10</span>
                                <span className="h-tag">
                                  Festive offer Get 10% OFF
                                </span>
                                <span className="h-tag-term">
                                  <a href="#"> Term & Conditions</a>
                                </span>
                              </div>
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionHeader targetId="2" tag="h3">
                            Product Description
                          </AccordionHeader>
                          <AccordionBody accordionId="2">
                            <div className="pro-single-details-inf">
                              <div className="pro-list-1">
                                <Table>
                                  <tbody>
                                    <tr>
                                      <th scope="row">Style</th>
                                      <td>Trendy, Engagement</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Ideal For</th>
                                      <td>Women</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Occasion</th>
                                      <td>Gold, Diamond</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Material</th>
                                      <td>Trendy, Engagement</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Purity</th>
                                      <td>14K</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Gross Weight</th>
                                      <td>0.89 ct</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Diamond Weight</th>
                                      <td>0.1 ct</td>
                                    </tr>
                                  </tbody>
                                </Table>
                            
                              </div>
                              <div className="moro-inf-1">
                                <h4>More Detail</h4>
                                <p>
                                  We offer a six month warranty for all our
                                  products, including Custom made items. The
                                  warranty is voided if the items have been
                                  tampered with or have been subjected to
                                  physical injury.
                                </p>
                                <p>
                                  We offer a 14 Day Return Policy for all
                                  purchases. Please note Custom Orders are final
                                  sale due to their nature. If you have any
                                  other doubt, please reach out to us. We are
                                  always happy to serve you.
                                </p>
                              </div>
                              <div className="moro-inf-2">
                                <h4>Shipping & Packaging Details</h4>
                                <p>Dispatches in 4 - 10 business days</p>
                                <ul>
                                  <li>Delivery in 3 - 5 days</li>
                                  <li>Shipped by UPS with Tracking</li>
                                  <li>Packaged in pouch/box</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionHeader targetId="3" tag="h3">
                            Reviews
                          </AccordionHeader>
                          <AccordionBody accordionId="3">
                            <div className="user-prd-comm">
                              <div className="rept-col">
                                <span>Vivek Gururani</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Susil Behera</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use! It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Abhinav</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Susil Behera</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Abhinav</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Vivek Gururani</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                            </div>
                            <div className="action-comment">
                              <button type="button" className="btn btn-lg btn-warning my-rev" >Add Your Review</button>
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-60">
                                            <div className="col-12">
                                                <h3 className="section-title style-1 mb-30">Related products</h3>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products position-relative">
                                                    <RelatedSlider />
                                                </div>
                                            </div>
                                        </div>
      </div>
    </section>
  );
};

export default ProductDetailsnew;
