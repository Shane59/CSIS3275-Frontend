import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../css/AdminPage.css';

function AdminPage() {

    return (
        
        <div id='adminPageContainer'>
            <div id='adminSidebar'>
                <h5>Administration</h5>
                <ul id='adminNav' className="nav flex-column">
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="profile">Profile</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="tours">Tours</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="travelBuddies">Travel Buddies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="bookings">Bookings</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default AdminPage;