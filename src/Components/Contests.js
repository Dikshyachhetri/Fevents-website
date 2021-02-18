import React from 'react'

const Contests = () => {
    return (
        <div className="contests-column">
        <span className="a-contest">
        <img className="dancing-img"   alt="Dancing" src="otakuimage/img13.jpg"/>
            <h2 className="first-title">Ani Dance Competition
            <p className="first-contest">To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more,</p>
            </h2>
</span>

<span className="b-contest">
<img className="singing-img"   alt="Singing" src="otakuimage/img14.jpg"/>
            <h2 className="second-title">Ani Song Cover Contest
                <p className="second-contest">To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more,</p>
            </h2>
</span>

<span className="c-contest">
<img className="deadpool-img"   alt="DeadPool" src="otakuimage/img15.jpg"/>
            <h2 className="third-title">AMV Contest & Showcase 
                <p className="third-contest">To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more,</p>
            </h2>
            </span>
        </div>
    )
}

export default Contests;
