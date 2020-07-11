import React from 'react';

const NameFilterForm = ({nameFilter, handleNameFilterChange}) => (
    <div>
        filter: <input value={nameFilter} onChange={handleNameFilterChange} />
    </div>
);

export default NameFilterForm;