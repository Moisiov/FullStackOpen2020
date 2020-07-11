import React, { useState } from 'react'

/*const Persons = ({ persons }) => (
  <div>
    {persons.map((person, i) => (
      <p key={i}>{person.name} {person.number}</p>
    ))}
  </div>
);*/

const Persons = ({ persons, filter }) => (
  <div>
    {persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase()))
    .map((person, i) => (
      <p key={i}>{person.name} {person.number}</p>
    ))}
  </div>
);

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '0123456789'
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const addPerson = (e) => {
    e.preventDefault();

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(newPerson));
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter: <input value={nameFilter} onChange={handleNameFilterChange} />
      </div>
      <h3>Add new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={nameFilter} />
    </div>
  );

}

export default App