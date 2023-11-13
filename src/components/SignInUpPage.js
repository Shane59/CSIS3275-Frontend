import React, {useState} from 'react';
import '../css/SignInPage.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TravelBuddySignUp from './TravelBuddySignUp';
import { NavLink } from 'react-router-dom';

 function SignInUpPage() {

  const[signIn, setSignIn] = useState("SignIn");


  return (
    <div id="SignInPageContainer" className="container">
      <div id="SignInPageChild">
        <nav className="nav nav-pills nav-fill">
          <button onClick={() => setSignIn("SignIn")} id="signInTab" className="nav-item nav-link" >Sign In</button>
          <button onClick={() => setSignIn("SignUp")} id="signUpTab" className="nav-item nav-link" >Sign Up</button>
          <button onClick={() => setSignIn("TravelBuddySignUp")} id="tbSignUpTap" className="nav-item nav-link"> Become a Travel Buddy</button>
        </nav>
        { signIn === "SignIn" ?  <SignIn/> : signIn === "SignUp" ? <SignUp /> : signIn === "TravelBuddySignUp" ? <TravelBuddySignUp />: null}
      </div>
    </div>
  )
}

export default SignInUpPage;