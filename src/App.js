import React from "react";

import RegisterEvent from './Pages/RegisterEvent';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ReactPlayer from "react-player";
import News from "./Pages/News";
import Manga from "./Pages/Manga";
import Event from "./Pages/Event";
import Community from "./Pages/Community";
import Learnmore from "./Pages/Learnmore";
import Home from "./Pages/Home";
import Login from "./Pages/Login";


const App = () => {
  return (
    <Router>
    
    <ReactPlayer className="youtube-video"
      url="https://youtu.be/AHiAS6eMu_A">
    </ReactPlayer>


         <Route path="/register" component={RegisterEvent} />
         <Route path="/" component={Home} exact/>
         <Route path="/news" component={News} />
         <Route path="/manga" component={Manga} />
         <Route path="/learnmore" component={Learnmore} />
         <Route path="/community" component={Community} />
         <Route path="/events" component={Event} />
         <Route path="/login" component={Login} />
         
        </Router>
  )
}

export default App;
