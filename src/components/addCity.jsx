import React, { Component } from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "ed225f655bfa99f9c3c5e7bce2d248a3";

class AddCity extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    if (city && country) {

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });

    } else {
      this.setState({
      temperature:undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please select the Location"      
    });
    }

  };

  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      error
    } = this.state;
    return (
      <React.Fragment>
        <Navigation />
        <div className="container-fluid Home-Component">
          <div className="row">
            <div className="container Add-City-Container">
              <div className="row">
                <div className="col-md-6">
                  <h3>SEARCH CITIES</h3>
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={temperature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}
                  />
                </div>
                <div className="col-md-6">
                  <h3>CITY OF THE MONTH</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddCity;
