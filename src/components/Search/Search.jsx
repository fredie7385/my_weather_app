import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geoApiOptions, GEO_API_URL } from "../../Api's/Api's";

function Search({ onSearchChange }) {
  const [Search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => console.log(error));
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search For City"
      debounceTimeout={500}
      value={Search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
