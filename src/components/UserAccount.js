<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> refs/remotes/origin/user-account-page
import '../css/UserAccount.css';
import config from '../config';
import axios from 'axios';

const UserAccount = () => {
  const [travelBuddy, setTravelBuddy] = useState();
  const { travelBuddyId } = useParams();
  useEffect(() => {
    axios.get(config.apiUrl + '/api/travelBuddy/' + travelBuddyId)
      .then(response => {
        setTravelBuddy(response.data);
        console.log(travelBuddy);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

    return (
        <div className="account-container">
            <aside className="sidebar">
                <nav className="navigation">
                    <ul className="menu">
                        <li className="menu-item active"><a href="#">Profile</a></li>
                        <li className="menu-item"><Link to="/bookings">Bookings</Link></li>
                        <li className="menu-item"><a href="#">Settings</a></li>
                    </ul>
                </nav>
            </aside>
            {travelBuddy === undefined ? <p>Loading</p> :
          
            <main className="profile-content">
                <section className="profile-section">
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> {travelBuddy.firstName} {travelBuddy.lastName}</p>
                    <p><strong>Email:</strong> {travelBuddy.email}</p>
                    <p><strong>Username:</strong> {travelBuddy.username}</p>
                </section>
                <section className="profile-section">
                    <h2>Update Information</h2>
                    <form className="update-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder={`${travelBuddy.firstName} ${travelBuddy.lastName}`} />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder={travelBuddy.email} />
                        
                        <label htmlFor="Username">User name:</label>
                        <input type="text" id="Username" name="Username" placeholder={travelBuddy.username} />

                        <button type="submit">Update</button>
                    </form>
                </section>
            </main>
          }
        </div>
    );
};

export default UserAccount;
