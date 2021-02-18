import React from 'react'
import {Link} from "react-router-dom";


const RegisterEvent = () => {
    return(<div className="reg-form" id="grad1">
     <form>
  <div className="container" >
    <h1 className="reg-head" style={{color: "#FF8C42"}}>Register For Event</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
    <hr></hr>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
    <hr></hr>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
<hr></hr>
    <button type="submit" className="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
</form>
     </div>
    )
}

export default RegisterEvent;
