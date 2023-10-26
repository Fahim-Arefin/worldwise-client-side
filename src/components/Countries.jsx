import useCities from "../hooks/use-Cities";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

function Countries() {
  const { isLoading, cities } = useCities();

  const filteredCity = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  console.log(filteredCity);

  return (
    <div className="w-full gap-4 flex flex-wrap justify-center">
      {isLoading ? (
        <Spinner />
      ) : filteredCity.length ? (
        filteredCity.map((city) => <CountryItem city={city} key={city._id} />)
      ) : (
        "please add cities by clicking on the map"
      )}
    </div>
  );
}

export default Countries;
