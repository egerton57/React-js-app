import React, { Component } from "react";

class Weather extends Component {
  state = {};
  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      error
    } = this.props;

    return (
      <React.Fragment>
          {city && country && <p>Location: {city}, {country}</p> }
          {temperature && <p>Temp: {temperature}°</p>}
          {humidity && <p>Humidity: {humidity}</p>}
          {description && <p>Condition: {description}</p>}
          {error && <p>{error}</p>}
      </React.Fragment>
    );
  }
}

export default Weather;
