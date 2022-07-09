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

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const HomeSection = () => {
  // const map = useMap();
  const [center, setCenter] = useState({ lat: 22.302711, lng: 114.177216 });
  const Vancouver = [49.246292, -123.116226];

  const [startAnimation, setStartAnimation] = useState(false);
  const startSnake = () => setStartAnimation(true);

  const locations = [
    {
      name: "Lassonde School of Engineering",
      position: [43.77186, -79.506731],
    },
    { name: "Vancouver", position: [49.246292, -123.116226] },
    { name: "Vietnam", position: [14.0583, 108.2772] },
    { name: "Seoul", position: [37.5326, 127.024612] },
    { name: "Hong Kong", position: [22.302711, 114.177216] },
    { name: "Markham", position: [43.856098, -79.337021] },
  ];
  const multiPolyline = [
    [49.246292, -123.116226],
    [22.302711, 114.177216],
    [14.0583, 108.2772],
    [37.5326, 127.024612],
    [43.77186, -79.506731],
  ];
  const fillBlueOptions = { fillColor: "blue" };
  // useEffect(() => {
  //   const route = L.featureGroup([
  //     L.marker(locations[0].position, { markerIcon }),
  //     L.polyline([locations[0].position, locations[1].position]),
  //     L.marker(locations[1].position, { markerIcon }),
  //   ]);
  //   // route.addTo;
  //   map.mapfitBounds(route.getBounds());

  //   map.addLayer(route);

  //   route.addTo(map).snakeIn();
  // });

  // useState({ lat: 43.77186, lng: -79.506731 });
  const ZOOM_LEVEL = 7;
  const ZOOM_MIN = 2.5;
  const mapRef = useRef();

  // React.useEffect(() => {
  //   const { current = {} } = mapRef;
  //   const { leafletElememt: map } = current;
  //   setTimeout(() => {
  //     map.flyTo(Vancouver, 14, {
  //       duration: 3,
  //     });
  //   }, 1000);
  // }, [mapRef]);

  return (
    <>
      <Map id="home">
        <MapBox>
          <MapH1>Lassonde Blockchain</MapH1>
          <MapP>
            A student community love to share and learn the newest tech in
            blockchain, web3.0, matervrse, and more.
          </MapP>
          <MapContainer
            id="map"
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
            {/* <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
            <TileLayer
              attribution={osm.maptiler.attribution}
              url={osm.maptiler.url}
              // noWrap={true} //this is the crucial line
            />
            {/* <SnakeAnim startAnimation={startAnimation} /> */}

            {/* <Polyline pathOptions={fillBlueOptions} positions={multiPolyline} /> */}

            <FeatureGroup>
              <Marker position={center} icon={markerIcon} />
              <Marker position={locations[0].position} icon={markerIcon} />
              <Marker position={locations[1].position} icon={markerIcon} />
              <Marker position={locations[2].position} icon={markerIcon} />
              <Marker position={locations[3].position} icon={markerIcon} />
              <Marker position={locations[4].position} icon={markerIcon} />
              <Marker position={locations[5].position} icon={markerIcon} />
            </FeatureGroup>
          </MapContainer>
          {/* <button onClick={startSnake}>Snake it!</button> */}
        </MapBox>
      </Map>
    </>
  );
};

export default HomeSection;
