import React, { useState, useRef } from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import { Popup, Marker } from "react-leaflet";

import osm from "./osMaptiler";
// // import "leaflet/dist/leaflet.css";
import { Map, MapH1 } from "./HomeElements";

// import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const HomeSection = () => {
  const [center, setCenter] = useState({ lat: 22.302711, lng: 114.177216 });
  const ZOOM_LEVEL = 5;
  const mapRef = useRef();

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  return (
    <>
      <Map>
        <MapH1>Welcome to LBD BlockMap</MapH1>
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
          style={{ height: "600px" }}
        >
          {/* <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
          <TileLayer
            attribution={osm.maptiler.attribution}
            url={osm.maptiler.url}
          />
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Map>
    </>
  );
};

export default HomeSection;
