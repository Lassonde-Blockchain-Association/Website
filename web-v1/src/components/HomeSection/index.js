import React, { useState, useRef, useEffect } from "react";
import osm from "./osMaptiler";
// // import "leaflet/dist/leaflet.css";
import { Map, MapBox, MapH1, MapP } from "./HomeElements";
import L from "leaflet";
import "../../";

// import * as React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  FeatureGroup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";

import "leaflet.polyline.snakeanim";
import SnakeAnim from "./SnakeAnim";
import markerIcon from "./constants";
import Data from "./location.json";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const HomeSection = () => {
  const [center, setCenter] = useState({ lat: 22.302711, lng: 114.177216 });
  const Vancouver = [49.246292, -123.116226];

  const [startAnimation, setStartAnimation] = useState(false);
  const startSnake = () => setStartAnimation(true);

  const ZOOM_LEVEL = 7;
  const ZOOM_MIN = 2.5;
  const mapRef = useRef();

  return (
    <>
      <Map id="home">
        <MapBox>
          <MapH1>Lassonde Blockchain</MapH1>
          <MapP>
            A student community dedicate to share and learn our newest tech in
            blockchain, web3.0, metaverse, and more.
          </MapP>
          <MapContainer
            id="mapid"
            center={Vancouver}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
            minZoom={ZOOM_MIN}
            scrollWheelZoom={false}
            maxBounds={[
              [-90, -185],
              [90, 185],
            ]}
            maxBoundsViscosity={1}
          >
            <TileLayer
              attribution={osm.maptiler.attribution}
              url={osm.maptiler.url}
              // noWrap={true} //this is the crucial line
            />
            {/* <SnakeAnim startAnimation={startAnimation} /> */}
            <FeatureGroup>
              {Data.map((display) => (
                <Marker
                  key={display.location}
                  position={[display.coordinates[0], display.coordinates[1]]}
                  icon={markerIcon}
                >
                  <Popup>
                    {display.location} <br></br>
                    {display.coordinates}
                  </Popup>
                </Marker>
                // <Polyline positions={display.coordinates} color="red" />
              ))}
            </FeatureGroup>
            {/* {Data.map((display) => (
                <Polyline positions={display.coordinates} color="red" />
              ))} */}
          </MapContainer>
          {/* <button onClick={startSnake}>Snake it!</button> */}
        </MapBox>
      </Map>
    </>
  );
};

export default HomeSection;
