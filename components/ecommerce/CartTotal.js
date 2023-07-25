import React from "react";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

const CartTotal = () => {
  return (
    <div className="cart-total-price">
      <h3>Apply Promo Code</h3>
      <div className="prom-sect">
        <div className="left">
          <a href="#">
            <span className="o-code">FLAT20</span>
            <span className="offer">Get 20% OFF on First Purchase</span>
          </a>
          <span className="term">
            <a id="UncontrolledPopover">
              Term & Conditions <i className="bi bi-chevron-down"></i>
            </a>
          </span>
        </div>
        <div className="left dissable">
          <a href="#">
            <span className="o-code">FLAT20</span>
            <span className="offer">Get 20% OFF on First Purchase</span>
          </a>
          <span className="term">
            <a id="UncontrolledPopover">
              Term & Conditions <i className="bi bi-chevron-down"></i>
            </a>
          </span>
          <span className="offer-check-mess">Not Applicable</span>
        </div>
      </div>
      <div>
        <UncontrolledPopover
          className="hide-po"
          placement="bottom"
          target="UncontrolledPopover"
        >
          {/* <div className="close-popover"><a id="UncontrolledPopover"><i className="bi bi-x"></i></a></div> */}
          <PopoverHeader className="my-bi-hd">Term & Conditions </PopoverHeader>
          <PopoverBody className="my-bi">
            <div>
              <ul>
                <li>Change the trigger for the popover </li>
                <li>Change the trigger for the popover </li>
                <li>Change the trigger for the popover </li>
                <li>Change the trigger for the popover </li>
              </ul>
            </div>
          </PopoverBody>
        </UncontrolledPopover>
      </div>

      <div className="form-prom-app mb-30">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Promocode/ Voucher No."
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Apply
          </button>
        </div>
        <div className="fomr-message">
            <p>Promocode Applied FLAT20</p>
            <span>-1500</span>
        </div>
     
      </div>
      <hr className="border-hr" />
      <div className="order-summery mt-30">
        <h3 className="mb-25">Order Summary</h3>

        <div className="price-tab">
            <table className="sub-total">
                <tr>
                    <th>Subtotal</th>
                    <td>30,998</td>
                </tr>
                <tr>
                    <th>Total Discount</th>
                    <td>-1500</td>
                </tr>
                <tr>
                    <th>Shipping(standard)</th>
                    <td>FREE</td>
                </tr>
                
            </table>
            <hr className="border-hr-colo" />
            <table className="total-price">
                <tr>
                    <th>Total Cost</th>
                    <td>₹ 29,498</td>
                </tr>
            </table>
            <div className="check-out mt-50">
            <button type="submit" className="btn btn-primary">Place Order</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
