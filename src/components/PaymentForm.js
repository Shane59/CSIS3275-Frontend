import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import config from '../config';


const PaymentForm = (props) => {
  const handleBooking = async () => {
    try {
      const touristID = JSON.parse(localStorage.getItem('currentUser')).touristID;
      const response = await axios.post(config.apiUrl + `/api/booking/create?touristID=${touristID}&travelBuddyID=${props.travelBuddyID}&tourID=${props.tourID}&startTime=12:00:00`);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

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
        <Link to={`/checkout?tourId=${props.tourID}&travelBuddyName=${props.travelBuddyFirstName} ${props.travelBuddyLastName}&date=${props.calenderValue['$D']}/${props.calenderValue['$M']+1}/${props.calenderValue['$y']}&time=12:00:00`}>
          <button className="btn" onClick={handleBooking}>Pay Now</button>
        </Link>
      </div>
    </>
  )
}

export default PaymentForm;
