import React, { useState } from "react";
import  { Map, TileLayer } from "react-leaflet";

const HomeSection = () => {
  const [center, setCenter] = useState({lat: 13.084622, lng: 80.248357});
  const ZOOM_LEVEL = 9;
  return (
      <>
        <div>index</div>
        <Map
          center={center}
          zoom={ZOOM_LEVEL}
        >
          <TileLayer url={} attribution={} />
        </Map>
      </>
    );
};

export default HomeSection;
