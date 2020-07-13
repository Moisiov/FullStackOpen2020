import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import NameFilterForm from './components/NameFilterForm';
import AddPersonForm from './components/AddPersonForm';
import phonebookService from './services/phonebookService';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    phonebookService.getAll()
      .then(data => {
        setPersons(data);
      });
  }, [])

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber
    };

    const personFound = persons.find(person => person.name === newName);
    if (personFound) {
      let accept = window.confirm(`${personFound.name} is already added to phonebook, replace the old number with a new one?`);

      if (accept) {
        phonebookService.updateContact(personFound.id, newPerson)
          .then(() => {
            notify(`Updated ${newPerson.name}`);
            phonebookService.getAll()
              .then(data => {
                setPersons(data);
              });
          });
      }
      return;
    }

    phonebookService.addNew(newPerson)
      .then(data => {
        setPersons(persons.concat(data));
        setNewName('');
        setNewNumber('');
        notify(`Added ${newPerson.name}`);
      });

  };

  const notify = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg(null);
    }, 2000);
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleDeleteBtnClick = (person) => {
    let accept = window.confirm(`Delete ${person.name}?`);

    if (accept) {
      phonebookService.deleteContact(person.id)
        .then(() => {
          notify(`Deleted ${person.name}`);
          phonebookService.getAll()
            .then(data => {
              setPersons(data);
            });
        });
    }
  };

  return (
    <div>
      <Notification message={errorMsg} />
      <h2>Phonebook</h2>
      <NameFilterForm nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <h3>Add new</h3>
      <AddPersonForm addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={nameFilter} handleDeleteBtnClick={handleDeleteBtnClick} />
    </div>
  );

};

export default App