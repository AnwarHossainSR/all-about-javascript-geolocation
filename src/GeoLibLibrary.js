import * as geolib from 'geolib';
import React, { useEffect } from 'react';
import { storePosition } from './constant/data';

const GeoLibLibrary = () => {
  useEffect(() => {
    // Working with W3C Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(
          'You are ',
          geolib.getDistance(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            {
              latitude: storePosition.latitude,
              longitude: storePosition.longitude,
            }
          ),
          `meters away from ${storePosition.latitude} ${storePosition.longitude}`
        );
      },
      () => {
        alert('Position could not be determined.');
      }
    );
  }, []);

  return <div>GeoLibLibrary</div>;
};

export default GeoLibLibrary;
