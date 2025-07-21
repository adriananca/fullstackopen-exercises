const Course = ( {course} ) => (
  <div>
    <Header name={ course.name } />
    <Content parts={ course.parts } />
  </div>
)

const Header = ( {name} ) => (
  <h1>{name}</h1>
)

const Content = ( { parts} ) => (
  <div>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
      <Total parts={parts} />
  </div>
)

const Part = ( { name, exercises }) => (
  <div>
    {name} {exercises}
  </div>
)

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p><strong>total of {total} exercises</strong></p>
  )
}

export default Course