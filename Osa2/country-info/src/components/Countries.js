import React, {useState, useEffect} from 'react';
import CountryData from './CountryData';

const Countries = ({ countries, countryFilter }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    // set selectedCountry = null when countryFilter changes
    useEffect(() => {
        setSelectedCountry(null);
    }, [countryFilter])

    let searchResult = countries.filter(country =>
        country.name.toLowerCase().includes(countryFilter.toLowerCase()));
        console.log(selectedCountry);
        
    // Check if selectedCountry != null/undefined or a string matching exactly to filter is found
    const exactName = selectedCountry ?
    selectedCountry :
    searchResult.find(
        country =>
        country.name.toLowerCase() === countryFilter.toLowerCase()
    );

    if (exactName) {
        searchResult = [exactName];
    }

    const selectCountry = (country) => {
        setSelectedCountry(country);
    }

    let content = <div>Too many matches, specify another filter.</div>;
    if (searchResult.length <= 10 && searchResult.length !== 1) {
        const inlineElement = {
            display: 'inline-block',
            marginRight: '8px'
        }

        content = <div>{searchResult.map((country, i) => (
            <div key={i}>
                <p style={inlineElement}>{country.name}</p>
                <button style={inlineElement} onClick={() => selectCountry(country)}>Show info</button>
            </div>
        ))}</div>;
    }
    else if (searchResult.length === 1) {
        
        content = <CountryData country={searchResult[0]} />;
    }

    return <div>{content}</div>;
};

export default Countries;