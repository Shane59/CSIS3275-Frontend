import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../css/SignInPage.css';
import { NavLink } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

export default function SignUpInContainer() {
  return (
    <div id="SignInPageContainer" className="container">
      <div id="SignInPageChild">
        <nav className="nav nav-pills nav-fill">
          <NavLink id="signInTab" className="nav-item nav-link" to="/signin">Sign In</NavLink>
          <NavLink id="signUpTab" className="nav-item nav-link" to="/signup">Sign Up</NavLink>
        </nav>
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  )
}