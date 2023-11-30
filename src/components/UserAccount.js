import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../css/UserAccount.css';
import config from '../config';
import axios from 'axios';

const UserAccount = () => {
  const tabs = ["Profile", "Booking", "Setting"];
  const [travelBuddy, setTravelBuddy] = useState();
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const { travelBuddyId } = useParams();
  useEffect(() => {
    axios.get(config.apiUrl + '/api/travelBuddy/' + travelBuddyId)
      .then(response => {
        setTravelBuddy(response.data);
      })
      .catch(error => {
        console.log(error)
      })

      axios.get(config.apiUrl + '/api/booking', {
        params: {
          travelBuddyID: travelBuddyId
        }
      })
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  const changeTab = (id) => {
    setActiveTab(id);
  }

  const activeNav = (id) => {
    let el = "menu-item";
    if (id === activeTab) {
      el += " active"
    }
    return el;
  }

  return (
    <div className="account-container">
      <aside className="sidebar">
        <nav className="navigation">
          <ul className="menu">
            {tabs.map((tab, id) => (
              <li className={activeNav(id)}
                key={tab} >
                  <a href="#"
                    onClick={() => changeTab(id)}>{tab}
                  </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {activeTab === 0 && travelBuddy !== undefined ?
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
        : null
      }
      {activeTab === 1 && bookings !== undefined ?
        <main className="profile-content">
          <h2>Booking Information</h2>
          <table id="travelBuddyTable" className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Booking ID</th>
                <th scope="col">Tour Name</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Start Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => {
                return (
                  <tr>
                    <td>{booking.bookingID}</td>
                    <td>{booking.bookingID}</td>
                    <td>{booking.bookingDate}</td>
                    <td>{booking.startTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      : null}
      
    </div>
  );
};

export default UserAccount;
