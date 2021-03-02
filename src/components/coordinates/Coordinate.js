import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class Coordinate extends React.Component {
  state = { lat: 0, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (!this.state.errorMessage && !this.state.lat)
      return <Spinner text={'Please accept location request.'} />;

    return this.state.errorMessage ? (
      <h1>Error: {this.state.errorMessage} </h1>
    ) : (
      <SeasonDisplay lat={this.state.lat} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Coordinate;
