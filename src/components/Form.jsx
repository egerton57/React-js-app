import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get Weather</button>
          {/*       <input
            type="text"
            name="search"
            id="search"
            placeholder="Search City"
            className="Search-Bar"
          />
          <button type="submit" className="btn btn-default Search-Button">
            <i className="fa fa-search" />
</button>*/}
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
