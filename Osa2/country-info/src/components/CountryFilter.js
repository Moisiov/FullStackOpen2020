import React from 'react';

const CountryFilter = ({countryFilter, handleChange}) => (
    <div>
        Find countries: <input value={countryFilter} onChange={handleChange} />
    </div>
);

export default CountryFilter;