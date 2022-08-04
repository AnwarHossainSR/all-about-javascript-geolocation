import React from 'react';
import { storePosition } from './constant/data';
import { useDistance } from './hook/useDistance';
import { useGeolocation } from './hook/useGeolocation';

const App = () => {
  const {
    loading,
    error,
    data: { latitude, longitude },
    id,
  } = useGeolocation();
  //const [distance, setDistance] = useState(null);

  const { message, distanceId } = useDistance(
    latitude,
    longitude,
    storePosition.latitude,
    storePosition.longitude
  );

  // useEffect(() => {
  //   if (!latitude || !longitude)
  //     return setDistance('latitude or longitude is null');
  //   setDistance(
  //     measureDistance(
  //       latitude,
  //       longitude,
  //       storePosition.latitude,
  //       storePosition.longitude
  //     )
  //   );
  //   const interval = setInterval(() => {
  //     setDistance(
  //       measureDistance(
  //         latitude,
  //         longitude,
  //         storePosition.latitude,
  //         storePosition.longitude
  //       )
  //     );
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [latitude, longitude, distance]);

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
      <div>Id: {id}</div>
      {/* <p>Distance</p> */}
      {/* {distance && <p>{distance}</p>} */}
      <>
        message<span>{message && message + ' '}</span> distanceId{' '}
        <span>{distanceId && distanceId}</span>
      </>
    </div>
  );
};

export default App;
