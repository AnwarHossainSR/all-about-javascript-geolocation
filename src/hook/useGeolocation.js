import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useGeolocation = (options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState({});
  const [id, setId] = useState(uuidv4());

  useEffect(() => {
    const successHandler = (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
      setId(uuidv4());
    };
    const errorHandler = (e) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        successHandler,
        errorHandler,
        options
      );
    }, 5000);
    return () => clearInterval(interval);
    // const id = navigator.geolocation.watchPosition(
    //   successHandler,
    //   errorHandler,
    //   options
    // );
    // return () => navigator.geolocation.clearWatch(id);
  }, [options]);
  return { loading, error, data, id };
};
