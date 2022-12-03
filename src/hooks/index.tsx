import { useEffect, useState } from "react";

interface Country {
  name: string;
  code: string;
}

const useCountriesFilter = (countries: Country[]) => {
  const [filter, setFilter] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => country.code.includes(filter)),
    );
  }, [filter, countries]);

  return { filter, setFilter, filteredCountries };
};

export { useCountriesFilter };
