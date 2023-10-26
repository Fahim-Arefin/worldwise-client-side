import { useMapEvent } from "react-leaflet";
import { useNavigate } from "react-router-dom";

function DetectMapClick() {
  const navigate = useNavigate();

  //read doc for how to handle events on map
  useMapEvent({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });

  return null;
}

export default DetectMapClick;
