import React from "react";



const ApprovedTravelBuddy = (props) => {
    return (
        <tr>
            <td>{props.travelBuddyID}</td>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td>{props.email}</td>
            <td>{props.desc}</td>
            <td>{props.username}</td>
            <td>{props.resume}</td>
            <td>{props.imageURL}</td>
            <td>{props.appStatus}</td>
            <td><button id="editBtn" type="button" className="btn btn-primary">Edit</button></td>
            <td><button id="deleteBtn" type="button" className="btn btn-danger">Delete</button></td>
        </tr>
    )
}


function ApprovedTravelBuddies() {

    //get only travel buddies with Approved ApplicationStatus
    // filter map function

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
                    <ApprovedTravelBuddy 
                        travelBuddyID='1'
                        fname='Jane'
                        lname='Smith'
                        email='janesmith@me.com'
                        desc='good guide'
                        username='janesmith'
                        resume='blob storage'
                        imageURL='blob storage'
                        appStatus='Approved'/>


                </tbody>
            </table>
        </div>
    )
}

export default ApprovedTravelBuddies