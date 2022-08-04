import useGeolocation from './hook/useGeolocation';

const Geolocation = () => {
  const {
    loading,
    error,
    data: { latitude, longitude },
    id,
  } = useGeolocation();

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
      <div>Id: {id}</div>
    </>
  );
};

export default Geolocation;
