import { useEffect } from "react";
import PropTypes from "prop-types";
// import { useLeaflet } from "react-leaflet";
import L from "leaflet"; 
import "leaflet.polyline.snakeanim/L.Polyline.SnakeAnim.js";
import markerIcon from "./constants";
import { useMap } from "react-leaflet";
import osm from "./osMaptiler";
import "./location.json";

// import { useLeafletMap } from "use-leaflet"


const SnakeAnim = ({ startAnimation }) => {
    // const { map } = useMap();
    const map = L.map('mapid',  {
      zoomControl: false
    }).setView([49.246292, -123.116226], 7);

    L.tileLayer('')
  useEffect(() => {
    if (!startAnimation) return;
    const LSE = [43.77186, -79.506731];
    const Vancouver = [49.246292, -123.116226];
    const Vietnam = [14.0583, 108.2772];
    const Seoul = [37.5326, 127.024612];
    const Markham = [43.856098, -79.337021];

    const route = L.featureGroup([
      L.marker(LSE, { markerIcon }),
      L.polyline([LSE, Vancouver]),
      L.marker(Vancouver, { markerIcon }),
    ], { snakingPause: 200 });
    map.mapfitBounds(route.getBounds());

    map.addLayer(route);

    route.addTo(map).snakeIn();

    route.on("snakestart snake snakeend", (ev) => {
      console.log(ev.type);
    });
  }, [startAnimation]);

  return null;
};

SnakeAnim.propTypes = {
    startAnimation: PropTypes.bool.isRequired
};

export default SnakeAnim;