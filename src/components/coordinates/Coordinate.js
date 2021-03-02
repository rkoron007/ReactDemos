import React from 'react';
import SeasonDisplay from './SeasonDisplay';
class Coordinate extends React.Component {
  state = { lat: 0, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (!this.state.errorMessage && !this.state.lat) return <h1>Loading...</h1>;

    return this.state.errorMessage ? (
      <h1>Error: {this.state.errorMessage} </h1>
    ) : (
      <SeasonDisplay lat={this.state.lat} />
    );
  }
}

export default Coordinate;
