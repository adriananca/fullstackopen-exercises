const Persons = ({ persons, newFilter }) =>
  persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase()))
    .map(person => (
      <Person key={person.id} person={person} />
    ))


const Person = ({ person }) =>
  <div>{person.name} {person.number}</div>

export default Persons