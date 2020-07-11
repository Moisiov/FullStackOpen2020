import React from 'react'

const Persons = ({ persons, filter }) => (
    <div>
        {persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))
            .map((person, i) => (
                <p key={i}>{person.name} {person.number}</p>
            ))}
    </div>
);

export default Persons;