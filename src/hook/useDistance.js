// const earthRadius = 6378137;
// const toRadius = (value) => (value * Math.PI) / 180;
// export const useDistance = (latitude1, longitude1, latitude2, longitude2) => {
//   console.log(latitude1, longitude1, latitude2, longitude2);
//   const distance =
//     Math.acos(
//       Math.sin(toRadius(latitude2)) * Math.sin(toRadius(latitude1)) +
//         Math.cos(toRadius(latitude2)) *
//           Math.cos(toRadius(latitude1)) *
//           Math.cos(toRadius(longitude1) - toRadius(longitude2))
//     ) * earthRadius;

//   return Math.round(convertDistance(distance, 'm'));
// };

// const convertDistance = (meters, targetUnit = 'm') => {
//   return distanceConversion[targetUnit] * meters;
// };

// const distanceConversion = {
//   m: 1,
//   mi: 1 / 1609.344,
//   km: 0.001,
//   cm: 100,
//   mm: 1000,
// };

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const earthRadius = 6378137;

const toRadius = (value) => (value * Math.PI) / 180;
export const useDistance = (latitude1, longitude1, latitude2, longitude2) => {
  const [distanceId, setId] = useState(uuidv4());
  const [message, setmessage] = useState('');
  const distance =
    Math.acos(
      Math.sin(toRadius(latitude2)) * Math.sin(toRadius(latitude1)) +
        Math.cos(toRadius(latitude2)) *
          Math.cos(toRadius(latitude1)) *
          Math.cos(toRadius(longitude1) - toRadius(longitude2))
    ) * earthRadius;
  const abc = Math.round(convertDistance(distance, 'm'));
  useEffect(() => {
    if (isNaN(abc)) return;
    if (abc < 3000) {
      setmessage('You are ' + abc + ' meters away');
    } else {
      setmessage('You are ' + abc + ' meters away');
    }
    setId(uuidv4());
    const interval = setInterval(() => {
      if (isNaN(abc)) return;
      if (abc < 3000) {
        setmessage('You are ' + abc + ' meters away');
      } else {
        setmessage('You are ' + abc + ' meters away');
      }
      setId(uuidv4());
    }, 5000);
    return () => clearInterval(interval);
  }, [abc, distance]);
  return { message, distanceId };
};

const convertDistance = (meters, targetUnit = 'm') => {
  return distanceConversion[targetUnit] * meters;
};

const distanceConversion = {
  m: 1,
  mi: 1 / 1609.344,
  km: 0.001,
  cm: 100,
  mm: 1000,
};
