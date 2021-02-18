import React from 'react'
import{Link} from "react-router-dom";

const Highlights = () => {
    return (
        <div className="highlights-fevent">
        <p className="first-highlight"> Watchlist for the event</p>
        <h3 className="second-highlight">Event Highlights</h3>
        <p className="third-highlight">There was an idea. To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more, So that when they needed a forum, We could bring a convention unlike never before.</p>
            <Link to="/register">
            <button type="button"><h4 className="highlights-register"> Register for the Event</h4></button>
        </Link>
        
        </div>
    )
}

export default Highlights;
