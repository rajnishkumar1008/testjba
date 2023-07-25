import React from 'react';

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
      <label className="form-check-label" for="gridCheck" >
      Use a diffrent Billing Address | Add a New Address


      </label>
    </div>
  </div>
</form>
        </div>
    );
}

export default CartAddress;
