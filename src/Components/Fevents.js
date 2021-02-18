import React from 'react'
import {Col, Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Fevents = () => {
    return (
        <div className="fevents-home">
        <Col className="first-bunch">
        <h3 className="fevent-first">
            <span>f</span>
            <span>e</span>
            <span>v</span>
            <span style={{color: "rgba(0, 0, 0, 0.65)"}}>e</span>
            <span style={{color: "rgba(0, 0, 0, 0.65)"}}>n</span>
            <span style={{color: "rgba(0, 0, 0, 0.65)"}}>t</span>
            <span style={{color: "rgba(0, 0, 0, 0.65)"}}>s</span>
        </h3>
        <p className="fevent-second">Nepals First Virtual Comic and Cosplay Convention</p>
        <h1 className="fevent-third">COMIC AND COSPLAY<br></br> CONVENTION NEPAL</h1>
        <p className="fevent-fourth">There was an idea to bring together fans of Anime,<br></br> Manga, Comics, Cosplay, Games and Pop Culture<br></br> Manga from Nepal. To see if we could experience something <br></br> more, So that when they needed a forum. We could<br></br> bring a convention unlike never before</p>
         </Col>
         <dev className="rectangle-box"></dev>


         

         {/* NAVBAR */}
        <div className="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <Link class="navbar-brand" to="/" style={{color: "#FFFFFF"}}>  Home</Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active">
        <Link class="nav-link" to="/news" style={{color: "#FFFFFF"}}> News</Link>
        </li>

        <li class="nav-item active">
        <Link class="nav-link" to="/community" style={{color: "#FFFFFF"}}> Community</Link>
        </li>


      <li class="nav-item active">
      <Link class="nav-link" to="/manga" style={{color: "#FFFFFF"}}> Manga</Link>
      </li>

      <li class="nav-item active">
      <Link class="nav-link" to="/events" style={{color: "#FFFFFF"}}> Event</Link>
      </li>
    </ul>
  </div>
</nav>

</div>


<div class="first-buttons">
<Link to="/register">
<button type="button" ><p className="first-register" style={{color:"#ffffff"}}>Register for the Event</p></button>
</Link>
<Link to="/learnmore">
<button type="button" class="btn btn-light" className="learn-more"><p>Learn more</p></button>
</Link>
</div>


<div className="upper-three">
                <img className="pulse-img-2"   alt="My city Pulse" src="otakuimage/img1.png"/>
                <img className="nibl-img-2"    alt="NIBL"          src="otakuimage/img2.jpg"/>
                <img className="hotel-img-2"   alt="HA"            src="otakuimage/img3.png"/>
</div>

</div>
)
};

export default Fevents;
