import React, {useState} from 'react';
import '../css/SignInPage.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

 function SignInUpPage() {

  const[signIn, setSignIn] = useState("SignIn");


  return (
    <div id="SignInPageContainer" className="container">
      <div id="SignInPageChild">
        <nav className="nav nav-pills nav-fill">
          <button onClick={() => setSignIn("SignIn")} id="signInTab" className="nav-item nav-link" >Sign In</button>
          <button onClick={() => setSignIn("SignUp")} id="signUpTab" className="nav-item nav-link" >Sign Up</button>
        </nav>
        { signIn === "SignIn" ?  <SignIn/> : signIn === "SignUp" ? <SignUp /> : null}
        
      </div>
    </div>
  )
}

export default SignInUpPage;