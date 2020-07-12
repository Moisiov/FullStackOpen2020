import React from 'react';
import CountryData from './CountryData';

const Countries = ({ countries, countryFilter }) => {
    let searchResult = countries.filter(country =>
        country.name.toLowerCase().includes(countryFilter.toLowerCase()));

    // Check if a string matching exactly to filter is found
    const exactName = searchResult.find(country => country.name.toLowerCase() === countryFilter.toLowerCase());
    if (exactName) {
        searchResult = [exactName];
    }

    let content = <div>Too many matches, specify another filter.</div>;
    if (searchResult.length <= 10 && searchResult.length !== 1) {
        content = <div>{searchResult.map((country, i) => (
            <p key={i}>{country.name}</p>
        ))}</div>;
    }
    else if (searchResult.length === 1) {
        content = <CountryData country={searchResult[0]} />;
    }

    return <div>{content}</div>;
};

export default Countries;