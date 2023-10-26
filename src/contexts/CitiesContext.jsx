import { createContext, useCallback, useEffect, useReducer } from "react";

const CitiesContext = createContext();

const initialValue = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  if (action.type === "loading") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "cities/loaded") {
    return {
      ...state,
      isLoading: false,
      cities: action.payload,
    };
  }
  if (action.type === "city/loaded") {
    return {
      ...state,
      isLoading: false,
      currentCity: action.payload,
    };
  }

  if (action.type === "cities/created") {
    return {
      ...state,
      isLoading: false,
      currentCity: action.payload,
      cities: [...state.cities, action.payload],
    };
  }
  if (action.type === "cities/deleted") {
    return {
      ...state,
      isLoading: false,
      currentCity: {},
      cities: state.cities.filter((city) => city._id !== action.payload),
    };
  }
  if (action.type === "rejected") {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
}

function CitiesProvider({ children }) {
  // const BASE_URL = "http://localhost:3001";
  const BASE_URL = "https://worldwise-server-side.vercel.app";

  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialValue
  );

  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "there was a problem data fetching ...",
        });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async (id) => {
      try {
        if (Number(id) === currentCity._id) return;
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "there was a problem data fetching ...",
        });
      }
    },
    [currentCity._id]
  );

  const createCity = async (newCity) => {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // setCities([...cities, data]);
      dispatch({ type: "cities/created", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "there was a problem creating city ...",
      });
    }
  };
  const deleteCity = async (id) => {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "cities/deleted", payload: id });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "there was a problem creating city ...",
      });
    }
  };

  const valueToShare = {
    cities,
    isLoading,
    error,
    currentCity,
    getCity,
    createCity,
    deleteCity,
  };

  return (
    <CitiesContext.Provider value={valueToShare}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesContext, CitiesProvider };
