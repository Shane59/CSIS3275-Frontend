import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";
import config from "../config";


const Tour = (props) => {

    return (
            <tr id="tourAdminRow">
                <td>{props.tourID}</td>
                <td>{props.name}</td>
                <td>{props.location}</td>
                <td>{props.duration}</td>
                <td>{props.price}</td>
                <td>{props.desc}</td>
                <td>{props.imageUrl}</td>
                <td><button id="editBtn" type="button" className="btn btn-primary">Edit</button></td>
                <td><button id="deleteBtn" type="button" className="btn btn-danger"
                        onClick={() => {                            props.deleteTour(props.tourID)
                        }}
                        >Delete</button>
                </td>
            </tr>
        
    )
}

function ToursAdmin() {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios
            .get(config.apiUrl + '/api/admin/tours')
            .then((response) => {
                setTours(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const deleteTour = (tourID) => {
        axios
            .delete(config.apiUrl + '/api/admin/tours/delete/' + tourID)
            .then((response) =>{
                console.log(response.data);
            });

            setTours(tours.filter((el) => el.tourID !== tourID));
    }

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
                    <th scope="col">Tour Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Tour Image</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>                    
                    {tours.map((tour) => {
                        return (
                            <Tour
                                tourID={tour.tourID}
                                location={tour.location}
                                name={tour.tourName}
                                duration={tour.duration}
                                price={tour.price}
                                desc={tour.description}
                                imageUrl={tour.imageURL}
                                // editTour="placeholder"
                                deleteTour={deleteTour}
                                />
                        );    
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ToursAdmin;