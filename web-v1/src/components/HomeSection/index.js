import React, { useState, useRef } from "react";
import osm from "./osMaptiler";
// // import "leaflet/dist/leaflet.css";
import { Map, MapBox, MapH1 } from "./HomeElements";
import L from "leaflet";
import "../../";

// import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";

import "leaflet.polyline.snakeanim";
import SnakeAnim from "./SnakeAnim";

const HomeSection = () => {
  const [center, setCenter] = useState({ lat: 22.302711, lng: 114.177216 });

  const [startAnimation, setStartAnimation] = useState(false);
  const startSnake = () => setStartAnimation(true);

  // const locations = [
  //   {
  //     name: "Lassonde School of Engineering",
  //     position: [43.77186, -79.506731],
  //   },
  //   { name: "Vancouver", position: [49.246292, -123.116226] },
  //   { name: "Vietnam", position: [14.0583, 108.2772] },
  //   { name: "Seoul", position: [37.5326, 127.024612] },
  //   { name: "Hong Kong", position: [22.302711, 114.177216] },
  //   { name: "Markham", position: [43.856098, -79.337021] },
  // ];

  // const route = L.featureGroup([
  //   L.marker(locations[0].position, { markerIcon }),
  //   L.polyline([locations[0].position, locations[1].position]),
  //   L.marker(locations[1].position, { markerIcon }),
  // ]);

  // useState({ lat: 43.77186, lng: -79.506731 });
  const ZOOM_LEVEL = 5;
  const ZOOM_MIN = 2.5;
  const mapRef = useRef();

  React.useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  return (
    <>
      <Map id="home">
        <MapBox>
          <MapH1> BlockMap</MapH1>
          <MapContainer
            center={center}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
            minZoom={ZOOM_MIN}
            // scrollWheelZoom={false}
            // gestureHandling={true}

            // style={{ height: "800px" }}
          >
            {/* <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
            <TileLayer
              attribution={osm.maptiler.attribution}
              url={osm.maptiler.url}
            />
            <SnakeAnim startAnimation={startAnimation} />

            {/* <Marker position={center} icon={markerIcon} /> */}
            {/* <Marker position={locations[0].position} icon={markerIcon} />
            <Marker position={locations[1].position} icon={markerIcon} />
            <Marker position={locations[2].position} icon={markerIcon} />
            <Marker position={locations[3].position} icon={markerIcon} />
            <Marker position={locations[4].position} icon={markerIcon} />
            <Marker position={locations[5].position} icon={markerIcon} /> */}
          </MapContainer>
          <button onClick={startSnake}>Snake it!</button>
        </MapBox>
      </Map>
    </>
  );
};

export default HomeSection;
