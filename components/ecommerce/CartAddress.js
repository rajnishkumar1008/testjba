import React from 'react';
import { Toast,ToastHeader,ToastBody } from "reactstrap";

const CartAddress = () => {
    return (
        <div className='shipp-address'>
           <h3>Shipping Address</h3>
           <form className="row g-3">
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="First Name" />
  </div>
  <div className="col-md-6">
  <input type="text" className="form-control" placeholder="Last Name" />
  </div>
  <div className="col-12">
    <input type="text" className="form-control" id="inputAddress" placeholder="Street Name" />
  </div>
  <div className="col-12">
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="inputCity"  placeholder="Pincode" />
  </div>
  
  <div className="col-md-6">
    <input type="text" className="form-control" id="inputZip"placeholder="City"  />
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="inputCity" placeholder="State" />
  </div>
  
  <div className="col-md-6">
    <input type="text" className="form-control" id="inputZip" placeholder="Country" />
  </div>
  <div className="col-md-2">
    <input type="text" className="form-control" id="inputCity" placeholder="+91" />
  </div>
  
  <div className="col-md-10">
    <input type="text" className="form-control" id="inputZip" placeholder="1234567890" />
  </div>
  <div className="col-12">
  <label className="form-label">Billing Address</label>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck" >
      Use a diffrent Billing Address | Add a New Address


      </label>
    </div>
  </div>
</form>

<div>
  <button
    color="primary"
    onClick={function noRefCheck(){}}
  >
    Click Me
  </button>
  <br />
  <br />
  <Toast isOpen={false}>
    <ToastHeader toggle={function noRefCheck(){}}>
      Toast title
    </ToastHeader>
    <ToastBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ToastBody>
  </Toast>
</div>



        </div>
    );
}

export default CartAddress;
