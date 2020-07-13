import React from 'react';
import Weather from './Weather';

const CountryData = ({ country }) => {
    const imgStyle = {
        maxHeight: '250px',
        border: '4px solid gray',
        borderRadius: '8px'
    };

    return <div>
        <h3>{country.name}</h3>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h4>Languages</h4>
        <ul>
            {country.languages.map((lang, i) => (
                <li key={i}>{lang.name}</li>
            ))}
        </ul>
        <div>
            <img src={country.flag} alt={`The flag of ${country.name}`} style={imgStyle} />
        </div>
        <div>
            <Weather city={country.capital} />
        </div>
    </div>;
};

export default CountryData;
