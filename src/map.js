import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import { Marker } from "react-map-gl";

const TOKEN = process.env.REACT_APP_MAPBOX_KEY;

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px",
};

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 59.327523,
    longitude: 18.054335,
    zoom: 17,
  });

  const _onViewportChange = (viewport) =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <div style={{ margin: "0 auto" }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <Marker
          latitude={59.327523}
          longitude={18.054335}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img src="navigation.png" alt="marker"></img>
        </Marker>
      </MapGL>
    </div>
  );
};

export default Map;
