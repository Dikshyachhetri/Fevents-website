import React from 'react'

import Footer from '../Components/Footer';
import Register from '../Components/Register';
import Partners from '../Components/Partners';
import Celebration from '../Components/Celebration';
import Fevents from '../Components/Fevents';
import Contest from '../Components/Contests';
import Highlights from '../Components/Highlights';
import Vector from "../Components/Vector";

const Home = () => {
    return <>
            <Fevents />
      <Highlights />
      <Vector />
      <Contest />
      <Celebration />
        <Partners />
        <Register />
        <Footer />
      
    </>
}

export default Home;
