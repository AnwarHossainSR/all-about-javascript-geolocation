import React from 'react';
import { currentPosition, storePosition } from './constant/data';
import { useDistance } from './hook/useDistance';
import { usePosition } from './hook/usePosition';

const App = () => {
  const { latitude, longitude, error } = usePosition();
  const distance = useDistance(
    currentPosition.latitude,
    currentPosition.longitude,
    storePosition.latitude,
    storePosition.longitude
  );
  console.log(distance);
  return (
    <div>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      error: {error}
      <p>Distance</p>
    </div>
  );
};

export default App;
