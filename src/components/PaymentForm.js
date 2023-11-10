import React from "react";
import { Link } from "react-router-dom";


const PaymentForm = (props) => {
  return (
    <>
      <div>
        <div className="text-center"><h2>Payment Form</h2></div>
        <form action="" className="mt-4">
          <div className="row">
            <div className="col">
              <input type="text" name="fname" className="form-control" placeholder="First Name"/>
            </div>
            <div className="col">
              <input type="text" name="lname" className="form-control" placeholder="Last Name"/>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input type="text" name="credit-num" className="form-control" placeholder="Credit Card Number" />
            </div>
            <div className="col">
              <input type="date" name="expire-date" className="form-control" placeholder="Expiration Date" />
            </div>
            <div className="col">
              <input type="text" name="cvc-num" className="form-control" placeholder="CVC"/>
            </div>
          </div>
        </form>
      </div>
      <div className="text-end mt-5">
        <Link to={`/checkout?tourId=${props.tourId}&tourBuddyId=${props.tourBuddyId}&date=${props.calenderValue['$D']}/${props.calenderValue['$M']+1}/${props.calenderValue['$y']}&time=${props.timeSlot}`}>
          <button className="btn">Pay Now</button>
        </Link>
      </div>
    </>
  )
}

export default PaymentForm;
