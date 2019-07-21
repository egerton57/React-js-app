import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "ed225f655bfa99f9c3c5e7bce2d248a3";

class AddCity extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    main: "",
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
        main: data.weather[0].main,
        description: data.weather[0].description,
        error: ""
      });
    } 
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        main: undefined,
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
      main,
      description,
      error
    } = this.state;

    const isOn = this.props.onSwitch;

    return (
      <React.Fragment>
        <div className={isOn ? "container-fluid Dark-Home-Component" : "container-fluid Home-Component"}>
          <div className="row">
            <div className={isOn ? "container Dark-Add-City-Container" : "container Add-City-Container"}>
              <div className="row">
                <div className="col-md-12">
                  <h3>SELECT LOCATION</h3>

                  <div className="row">
                  <div align="center" className="col-md-6">
                    <Form getWeather={this.getWeather} />

                  </div> 

                  <div align="center" className="col-md-6" style={{padding:'1%'}}>
                    {" "}
                    <Weather
                      temperature={temperature}
                      city={city}
                      country={country}
                      humidity={humidity}
                      main={main}
                      description={description}
                      error={error}
                    />

                  </div>
                  </div>
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
