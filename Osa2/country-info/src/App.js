import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CountryFilter from './components/CountryFilter';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleCountryFilterChange = (e) => {
    setCountryFilter(e.target.value);
  };

  return (
    <div>
      <CountryFilter countryFilter={countryFilter} handleChange={handleCountryFilterChange} />
      <Countries countries={countries} countryFilter={countryFilter} />
    </div>
  );

};

export default App