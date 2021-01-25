import React from 'react';

const Coordinate = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Hello </div>;
};

export default Coordinate;
