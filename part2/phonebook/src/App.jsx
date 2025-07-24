import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const newObject = { 
      id: persons.length + 1,
      name: newName 
    }

    setPersons(persons.concat(newObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        { persons.map(person => (
          <Person key={person.id} person={person} />
        ))}
    </div>
  )
}

const Person = ( { person } ) => {
  return (
    <div>
      { person.name }
    </div>
  )
}

export default App