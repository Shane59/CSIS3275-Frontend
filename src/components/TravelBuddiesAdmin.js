import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function TravelBuddiesAdmin(props) {
    return (
        <div>
            <header className="adminPageHeaders">
                <h3>Travel Buddies</h3>
            </header>
            <NavLink id='approvedBtn'className='btn btn-dark' to='approved'>Approved Travel Buddies</NavLink>
            <NavLink id='pendingBtn'className='btn btn-dark' to='pending'>Pending Travel Buddies</NavLink>

            <Outlet />
        </div>
    )
}

export default TravelBuddiesAdmin;