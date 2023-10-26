import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

function useCities() {
  return useContext(CitiesContext);
}

export default useCities;
