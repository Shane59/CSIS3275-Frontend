import React, { useState } from 'react';
import '../css/UserAcctBookingsPage.css';
import { NavLink } from 'react-router-dom';

// Mock data for bookings
const mockBookings = [
    {
      "id": 1,
      "destination": "Hawaii",
      "date": "2023-12-20",
      "status": "Confirmed"
    },
    {
      "id": 2,
      "destination": "Alaska",
      "date": "2024-01-15",
      "status": "Pending"
    },
    {
      "id": 3,
      "destination": "New Zealand",
      "date": "2023-11-10",
      "status": "Cancelled"
    },
    {
      "id": 4,
      "destination": "Thailand",
      "date": "2023-08-05",
      "status": "Confirmed"
    },
    {
      "id": 5,
      "destination": "Iceland",
      "date": "2024-03-16",
      "status": "Pending"
    },
    {
      "id": 6,
      "destination": "Egypt",
      "date": "2023-10-02",
      "status": "Confirmed"
    }
  ];
  

const BookingsPage = () => {
  const [bookings] = useState(mockBookings); // Replace with actual data fetching logic

  return (
    <div className="account-container">
      <aside className="sidebar">
        <nav className="navigation">
          <ul className="menu">
            <li className="menu-item">
              <NavLink to="/useraccount" activeClassName="active">Profile</NavLink>
            </li>
            <li className="menu-item active">Bookings</li>
            <li className="menu-item">
              <NavLink to="/settings" activeClassName="active">Settings</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="bookings-content">
        <h2>Your Bookings</h2>
        <div className="bookings-list">
          {bookings.map(booking => (
            <div key={booking.id} className="booking-card">
              <div className="booking-detail">
                <h3>{booking.destination}</h3>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </div>
              <div className="booking-actions">
                {/* Add any buttons/actions for each booking here */}
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BookingsPage;
