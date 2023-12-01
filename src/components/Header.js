import React, {useState} from "react"
import "../css/HeaderFooter.css"
import logo from "../image/logo.jpg"
import { Link, Redirect } from "react-router-dom";

const LogOut = () => {
  const [redirect, setRedirect] = useState(false);

  const handleLogOut = () => {
    setRedirect(true);
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="navbar-nav">
      <Link onClick={handleLogOut} className="nav-link active" aria-current="page" to="/">Log Out</Link>
    </div>
  )
}


const LogIn = () => {
  return (
    <div className="navbar-nav">

        <Link className="nav-link active" aria-current="page" to="/signIn">Login/Register</ Link>
    </div>
  )
}

const Header = () => {
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

              {/* {
                if (localStorage.length > 1) {
                  <LogOut />
                } elif () {

                } elif () {

                } else {

                }
              } */}
              {localStorage.length > 1 ? <LogOut/>: localStorage.length === 1 && localStorage.getItem('currentUser') !== null ? <LogOut/> : localStorage.length === 1 && localStorage.getItem('loglevel') !== null ? <LogIn /> : localStorage.length === 0 ? <LogIn /> : null}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Header;