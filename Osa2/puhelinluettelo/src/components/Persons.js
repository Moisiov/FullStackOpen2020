import React from 'react'

const Persons = ({ persons, filter, handleDeleteBtnClick }) => {
    const inline = {
        display: 'inline-block',
        marginRight: '8px'
    }

    return <div>
        {
            persons.filter(person =>
                person.name.toLowerCase().includes(filter.toLowerCase()))
                .map((person, i) => (
                    <div key={i}>
                        <p style={inline}>{person.name} {person.number}</p>
                        <button style={inline} onClick={() => handleDeleteBtnClick(person)}>Delete</button>
                    </div>
                ))
        }
    </div>;
};

export default Persons;