import React from 'react'
import {Row, Col, Container} from "react-bootstrap";

const Partners = () => {
    return (
        <div className="partner-names">
        <Container>
            <p className="partner-head"> Our Official Partners </p>
        
                <img className="pulse-img"   alt="My city Pulse" src="otakuimage/img1.png"/>
                <img className="nibl-img"    alt="NIBL"          src="otakuimage/img2.jpg"/>
                <img className="hotel-img"   alt="HA"            src="otakuimage/img3.png"/>
                <img className="nabil-img"   alt="Nabil Bank"    src="otakuimage/img4.jpg"/>
                <img className="feather-img" alt="featherwebs"   src="otakuimage/img5.png"/>
                </Container>
        </div>
    )
}

export default Partners;
