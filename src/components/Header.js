import React, { useContext } from 'react';
import "../css/HeaderFooter.css"
import logo from "../image/logo.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';



const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Tourist Trap"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            {user ? (
                  <>
                    <Link to="/useraccount" className="nav-link">
                     Welcome, {user.name}
                    </Link>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                  </>
                ) : (
                  <Link className="nav-link active" to="/signin">Login/Register</Link>
                )}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Header;