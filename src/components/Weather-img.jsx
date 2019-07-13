import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
    'Weather-img/Cloudy.gif',
    'Weather-img/Lightning.gif',
    'Weather-img/Rainy.gif',
    'Weather-img/Sunny.gif',
    'Weather-img/Winter.gif'
];
 
const fadeProperties = {
  duration: 3000,
  transitionDuration: 900,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 //<img src="N57-Weather.png" alt="" width="50%" height="auto" />
const Slideshow = () => {
  return (
    <React.Fragment>
    <Fade {...fadeProperties}>

      <div className="each-fade">
        <div className="image-container" >
          <img src={fadeImages[0]} alt="" className="Weather-Slide img-fluid"/>
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} alt="" className="Weather-Slide img-fluid"/>
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} alt="" className="Weather-Slide img-fluid"/>
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[3]} alt="" className="Weather-Slide img-fluid"/>
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[4]} alt="" className="Weather-Slide img-fluid"/>
        </div>
      </div>

    </Fade>
    <img src="N57-Weather.png" className="Main-Logo" alt="App Logo" />
    </React.Fragment>
  )
}

export default Slideshow;