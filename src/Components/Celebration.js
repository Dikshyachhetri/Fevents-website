import React from 'react';
import {Row, Container} from "react-bootstrap";

const Celebration = () => {
    return (
        <div className="festive-celeb">
            <p className='first-line'> Interactive Contests, Games and Live Giveaways</p>
            <h2 className="second-line">This festival season celebrate Animation,<br></br> Comics, Games and Pop Culture at</h2>

            <div className="photo-grid">
                <img className="demon-rui"      alt="demon-rui"          src="otakuimage/img6.jpg"/>
                <img className="one-piece"      alt="One-piece"          src="otakuimage/img7.jpg"/>
                <img className="spider-man"     alt="SpiderMan"          src="/otakuimage/img8.jpg"/>
                <img className="harley-queen"   alt="Harley-Queen"       src="otakuimage/img9.jpg"/>
                <img className="dead-pool"      alt="Deadpool"           src="otakuimage/img10.jpg"/>
                <img className="wolverine-dc"   alt="Wolverine"          src="otakuimage/img11.jpg"/>
                <img className="iron-man"       alt="IronMan"            src="otakuimage/img12.jpg"/>
              </div>

        </div>
    )
}

export default Celebration;
