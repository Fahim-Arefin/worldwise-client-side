import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useCities from "../hooks/use-Cities";
// import { useSearchParams } from "react-router-dom";
// import styles from "./Map.module.css";
import "./Map.module.css"; //because there is only global css only
import ChangeCenter from "./ChangeCenter";
import DetectMapClick from "./DetectMapClick";
import useGeolocation from "../hooks/use-Geoloocation";
import Button from "./Button";
import useUrlGeoPosition from "../hooks/use-UrlGeoPosition";

function Map() {
  const { cities } = useCities();

  // using useSearchParams() hook we can get the query string also can set query with setter func
  //setSearchParams() it will set the query and also rerender the hole app so that
  // all other place will get this update

  const [mapPosition, setMapPosition] = useState([40.46, 32.71]);
  //custom hook
  const { isLoading, position, getPosition } = useGeolocation();

  //custom hook
  const [mapLat, mapLng] = useUrlGeoPosition();

  useEffect(() => {
    //to avoid error for the first time when a mapLat and mapLng is not defined
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (position) {
      setMapPosition([position.lat, position.lng]);
    }
  }, [position]);

  return (
    <div className="relative w-full h-[500px] lg:flex-1 lg:h-screen">
      {!position && (
        <Button
          onClick={getPosition}
          success
          className="absolute z-30 top-3/4 left-[40%] xl:left-[45%] rounded-lg font-bold"
        >
          {isLoading ? "loading..." : "use your location"}
        </Button>
      )}

      {/* grab these code from react leaflet doc*/}
      <MapContainer
        className={`h-[100%] z-20`}
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city._id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              {/* when we click on the map marker then pop up text will show */}
              {city.emoji} {city.cityName}
            </Popup>
          </Marker>
        ))}

        {/* this is a component which is used for change the center of the map each render */}
        <ChangeCenter position={mapPosition} />
        {/*in this below component defines click events on the map  */}
        <DetectMapClick />
      </MapContainer>
    </div>
  );
}

export default Map;

//navigate("form") will hit the route "app/form" nested in app
