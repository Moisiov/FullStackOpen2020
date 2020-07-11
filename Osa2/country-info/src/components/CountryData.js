import React from 'react';

const CountryData = ({ country }) => {
    const imgStyle = {
        maxHeight: '250px',
        border: '4px solid gray',
        borderRadius: '8px'
    }

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
            <img src={country.flag} style={imgStyle} />
        </div>
    </div>
};

export default CountryData;
