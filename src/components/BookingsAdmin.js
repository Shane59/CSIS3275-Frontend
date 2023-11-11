import React from "react";


const Booking = (props) => {
    return (
        <tr id="bookingAdminRow">
            <td>{props.bookingID}</td>
            <td>{props.toursitID}</td>
            <td>{props.travelBuddyID}</td>
            <td>{props.tourID}</td>
            <td>{props.date}</td>
            <td>{props.startTime}</td>
            <td>{props.transID}</td>
            <td>{props.imageURL}</td>
            <td><button id="editBtn" type="button" className="btn btn-primary">Edit</button></td>
            <td><button id="deleteBtn" type="button" className="btn btn-danger">Delete</button></td>
        </tr>
    )
}


const BookingsAdmin = (props) => {

    // get bookings
    //useEffect, get and axios

    return (
        <div>
            <header className="adminPageHeaders">
                <h3>Manage Bookings</h3>
            </header>
                        
            <table id="bookingAdminTable" className="table table-hover table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Booking ID</th>
                        <th scope="col">Tourist ID</th>
                        <th scope="col">Travel Buddy ID</th>
                        <th scope="col">Tour ID</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">Transaction ID</th>
                        <th scope="col">Image URL</th>
                    </tr>
                </thead>
                <tbody>
                    <Booking 
                        bookingID='1'
                        toursitID='2'
                        travelBuddyID='3'
                        tourID='4'
                        date='10/10/10'
                        startTime='1:00'
                        transID='5'
                        imageURL="www.blobstorage"
                        />
                    <Booking 
                        bookingID='1'
                        toursitID='2'
                        travelBuddyID='3'
                        tourID='4'
                        date='10/10/10'
                        startTime='1:00'
                        transID='5'
                        imageURL="www.blobstorage"
                        />
                    <Booking 
                        bookingID='1'
                        toursitID='2'
                        travelBuddyID='3'
                        tourID='4'
                        date='10/10/10'
                        startTime='1:00'
                        transID='5'
                        imageURL="www.blobstorage"
                        />                    
                    <Booking 
                        bookingID='1'
                        toursitID='2'
                        travelBuddyID='3'
                        tourID='4'
                        date='10/10/10'
                        startTime='1:00'
                        transID='5'
                        imageURL="www.blobstorage"
                        />

                    {/* {Loop to render all bookings  from db} */}
                    {/* {bookings.map((booking) => {
                        return (
                            <Booking
                                bookingID={booking.}
                                touristID={booking.}
                                travelBuddyID={booking.}
                                tourID={booking.}
                                date={booking.}
                                startTime={booking.}
                                transID={booking.}
                                imageURL={booking.}/>
                        );    
                    })} */}

                </tbody>
            </table>
        </div>
    )
}

export default BookingsAdmin;