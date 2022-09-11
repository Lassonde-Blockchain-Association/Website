import React, { useState, useRef } from "react";
import { Map, MapBox, MapH1, MapP, Background, Overlay } from "./HomeElements";
import videoBg from "../../video/bc2.mp4";

const Home = () => {
  return (
    <>
      <Map id="home">
        <Overlay />
        <Background src={videoBg} autoPlay loop muted />
        <MapBox>
          <MapH1>Lassonde Blockchain</MapH1>
          <MapP>
            A student community dedicate to share and learn our newest tech in
            blockchain, web3.0, metaverse, and more.
          </MapP>
        </MapBox>
      </Map>
    </>
  );
};

export default Home;
