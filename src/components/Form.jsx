import React, { Component } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  render() {
    const { country } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.props.getWeather}>
          <CountryDropdown
            value={country}
            className="Search-Bar"
            name="country"
            onChange={val => this.selectCountry(val)}
          />

          <input
            type="text"
            name="city"
            placeholder="City..."
            className="Search-Bar"
          />

          <button type="submit" className="btn btn-default Search-Button">
            <i className="fa fa-search" />
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
