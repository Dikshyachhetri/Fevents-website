import React from 'react'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
           <div className="reg-form" id="grad1">
     <form>
  <div className="container" >
    <h1 className="reg-head" style={{color: "#FF8C42"}}>Login</h1>
    <p>Please fill in this form to login to your account.</p>
    <hr></hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
    <hr></hr>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
    <hr></hr>
    <button type="submit" className="registerbtn"></button>
  </div>
  
  <div class="container signin">
    <p>Forgot Password <Link to="/register">GO BACK</Link>.</p>
  </div>
</form>
     </div>
        </div>
    )
}

export default Login;

