import React, { Component } from "react";
import firebase from 'firebase';


class Weather extends Component {
  Cloudy = require('../Weather-icons/Cloudy.png');
  Fog = require('../Weather-icons/fog.png');
  Hail = require('../Weather-icons/hail.png');
  Lightning = require('../Weather-icons/lightning.png');
  LightRain = require('../Weather-icons/light-rain.png');
  LightShowers = require('../Weather-icons/Light-Showers.png');
  LightSnow = require('../Weather-icons/light-snow.png');
  Overcast = require('../Weather-icons/Overcast.png');
  Rain = require('../Weather-icons/rain.png');
  Showers = require('../Weather-icons/Showers.png');
  Snow = require('../Weather-icons/snow.png');
  Sunny = require('../Weather-icons/Sunny.png');
  SunnyInterval = require('../Weather-icons/Sunny-Interval.png');
  SunnyPeriod = require('../Weather-icons/Sunny-Period.png');
  thunder = require('../Weather-icons/thunder.png');
  Thunderstorms = require('../Weather-icons/Thunderstorms.png');

  state = {};



  addCity = () =>{
    // e.preventDefault();
    
    var user = firebase.auth().currentUser;

     var userCity = [user.uid, this.props.city ,this.props.country];
     JSON.stringify(userCity);

     localStorage.setItem("UserCity", JSON.stringify(userCity));
    // localStorage.setItem("UserCity",user.uid);
  }


  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      main,
      description,
      error
    } = this.props;


   var conditionIcon = null;

    if (main === 'Clouds') {
      conditionIcon = this.Cloudy
    } 
    else if (main === 'Rain'  || main === 'Drizzle') {
      conditionIcon = this.Rain
    }
    else if (main === 'Sunny'  || main === 'Clear') {
      conditionIcon = this.Sunny
    }
    else if (main === 'Storm') {
      conditionIcon = this.Thunderstorms
    }
    else if (main === 'Fog') {
      conditionIcon = this.Fog
    }

    return (
      <React.Fragment>
        {city && country && temperature && humidity && description && main &&(
          <div className="Weather-Card">
            <p style={{fontSize:'20px',fontWeight:'bold'}}>{city}</p>
            <img src={conditionIcon} width="40%" height="auto" alt="Weather Condition"/>
            <p style={{fontSize:'20px',fontWeight:'bolder'}}>{temperature}°</p>
            <p style={{textTransform:'capitalize'}}>{description}</p>
            <p>Humidity: {humidity}</p>
            <button onClick={this.addCity} className="btn btn-success">Add City  <i className="fa fa-plus"/></button>
          </div>
        )}
        {error && <p>{error}</p>}
      </React.Fragment>
    );
  }
}

export default Weather;
