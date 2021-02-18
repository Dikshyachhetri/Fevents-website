import React from 'react';
import {Link} from "react-router-dom";
import RegisterEvent from "../Pages/RegisterEvent";

const Register = () => {
    return (
        <div className="register-event">
            <h3 className="first-part">Interactive Contests, Games and Live Giveaways </h3>
            <h1 className="second-part">This festival season celebrate Animation, <br></br>
             Comics, Games and Pop Culture at</h1><Link to="/register">
             <button type="button" class="btn btn-light"><p className="register-here"> Register for the Event</p></button>
</Link>
        
             
        </div>
    )
}

export default Register;
