import { v4 as uuidv4 } from 'uuid';

export const measureDistance = (
  latitude1,
  longitude1,
  latitude2,
  longitude2
) => {
  console.log(uuidv4());
  const earthRadius = 6378137;
  const toRadius = (value) => (value * Math.PI) / 180;
  const distance =
    Math.acos(
      Math.sin(toRadius(latitude2)) * Math.sin(toRadius(latitude1)) +
        Math.cos(toRadius(latitude2)) *
          Math.cos(toRadius(latitude1)) *
          Math.cos(toRadius(longitude1) - toRadius(longitude2))
    ) * earthRadius;
  return Math.round(convertDistance(distance, 'm'));
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
