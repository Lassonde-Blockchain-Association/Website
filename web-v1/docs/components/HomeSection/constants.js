import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: require("../../images/marker.png"),
  iconSize: [30, 30],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

export default markerIcon;
