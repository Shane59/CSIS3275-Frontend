import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/UserAccount.css';


const mockUsername = 'john_doe';

const UserAccount = () => {
    const [username, setUsername] = useState(mockUsername);

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
            <main className="profile-content">
                <section className="profile-section">
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> johndoe@example.com</p>
                    <p><strong>Username:</strong> johndoe1234</p>
                </section>
                <section className="profile-section">
                    <h2>Update Information</h2>
                    <form className="update-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="johndoe@example.com" />
                        
                        <label htmlFor="Username">User name:</label>
                        <input type="text" id="Username" name="Username" placeholder="johndoe1234" />

                        <button type="submit">Update</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default UserAccount;
