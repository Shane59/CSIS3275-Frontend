import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";


const Tour = (props) => {

    return (
       
            <tr id="tourAdminRow">
                <td>{props.tourID}</td>
                <td>{props.availiabilityID}</td>
                <td>{props.location}</td>
                <td>{props.duration}</td>
                <td>{props.price}</td>
                <td>{props.desc}</td>
                <td>{props.name}</td>
                <td>{props.imageUrl}</td>
                <td><button id="editBtn" type="button" className="btn btn-primary">Edit</button></td>
                <td><button id="deleteBtn" type="button" className="btn btn-danger">Delete</button></td>

            </tr>
        
    )
}



//exported component, list all tours
function ToursAdmin() {

    // const [tours, setTours] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('/admin/tours')
    //         .then((response) => {
    //             setTours(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])


    return (
        <div>
            <div>
                <header className="adminPageHeaders">
                    <h3>Manage Tours</h3>
                    <button id="addTourBtn" className="btn btn-primary">
                        <NavLink style={{color: 'white', textDecoration: 'none'}} to='addTour'>
                            Add Tour</NavLink>
                    </button>
                </header>
            </div>
            <Outlet />
            <table id="tourAdminTable" className="table table-hover table-bordered">
                <thead >
                    <tr>
                    <th scope="col">Tour ID</th>
                    <th scope="col">Availiability ID</th>
                    <th scope="col">Location</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Tour Name</th>
                    <th scope="col">Tour Image</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Tour 
                        tourID='1'
                        availiabilityID='2'
                        location='Vancouver'
                        duration='2.00'
                        price='99.99'
                        desc='a good tour'
                        name='TOUR TOUR TOUR'
                        imageUrl="asdf"
                        />
    
                    <Tour 
                        tourID='1'
                        availiabilityID='2'
                        location='Vancouver'
                        duration='2.00'
                        price='99.99'
                        desc='a good tour'
                        name='TOUR TOUR TOUR'
                        imageUrl="asdf"
                        />
                    <Tour 
                        tourID='1'
                        availiabilityID='2'
                        location='Vancouver'
                        duration='2.00'
                        price='99.99'
                        desc='a good tour'
                        name='TOUR TOUR TOUR'
                        imageUrl="asdf"
                        />
    
                    <Tour 
                        tourID='1'
                        availiabilityID='2'
                        location='Vancouver'
                        duration='2.00'
                        price='99.99'
                        desc='a good tour'
                        name='TOUR TOUR TOUR'
                        imageUrl="asdf"
                        />  

                    {/* {Loop to render all tours from db} */}
                    {/* {bookings.map((booking) => {
                        return (
                            <Tour
                                tourID={tour.}
                                availiabilityID={tour.}
                                location={tour.}
                                duration={tour.}
                                price={tour.}
                                desc={tour.}
                                name={tour.}
                                imageUrl={tour.}/>
                        );    
                    })} */}

                </tbody>
            </table>
        </div>
    )
}

export default ToursAdmin;