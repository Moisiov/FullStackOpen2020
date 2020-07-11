import React from 'react';
import CountryData from './CountryData';

const Countries = ({ countries, countryFilter }) => {
    const searchResult = countries.filter(country =>
        country.name.toLowerCase().includes(countryFilter.toLowerCase()));
    
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