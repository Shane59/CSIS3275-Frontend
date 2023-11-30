import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";


const PendingTravelBuddy = (props) => {
    return (       
        <tr>
            <td>{props.travelBuddyID}</td>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.email}</td>
            <td>{props.desc}</td>
            <td>{props.username}</td>
            <td>{props.resume}</td>
            <td>{props.imageURL}</td>
            <td>{props.appStatus}</td>
            <td><button id="editBtn" type="button" className="btn btn-primary">Edit</button></td>
            <td><button id="deleteBtn" type="button" className="btn btn-danger"
                    onClick={() => {
                        props.deleteTravelBuddy(props.travelBuddyID)
                    }}>Delete</button></td>
        </tr>
        
    )
}

function PendingTravelBuddies() {

    const [travelBuddies, setTravelBuddies] = useState([]);

    useEffect(() => {
        axios
            .get(config.apiUrl + '/api/admin/travelBuddies/pending')
            .then((response) => {
                setTravelBuddies(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const deleteTravelBuddy = (travelBuddyID) => {
        axios
            .delete(config.apiUrl + '/api/admin/travelBuddies/pending/delete/' + travelBuddyID)
            .then((response) =>{
                console.log(response.data);
            });

            setTravelBuddies(travelBuddies.filter((el) => el.travelBuddyID !== travelBuddyID));
    }

    return (
        <div>
            <table id="travelBuddyTable" className="table table-hover table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Travel Buddy ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                        <th scope="col">Username</th>
                        <th scope="col">Resume</th>
                        <th scope="col">Image URL</th>
                        <th scope="col">Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {travelBuddies.map((travelBuddy) => {
                        return (
                            <PendingTravelBuddy 
                                travelBuddyID={travelBuddy.travelBuddyID}
                                firstname={travelBuddy.firstName}
                                lastname={travelBuddy.lastName}
                                email={travelBuddy.email}
                                desc={travelBuddy.description}
                                username={travelBuddy.username}
                                resume={travelBuddy.resumeURL}
                                imageURL={travelBuddy.profileImageURL}
                                appStatus={travelBuddy.applicationStatus}
                                deleteTravelBuddy={deleteTravelBuddy}/>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PendingTravelBuddies;