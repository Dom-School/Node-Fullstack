import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Sum parts={course.parts} />
    </div>
  )
}

const Sum = ({ parts }) => {
  const sum = parts
    .map(part => part.exercises)
    .reduce((prev, next) => prev + next);
  return <b>Total of {sum} exercises</b>
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {

  const partList = () => parts.map(part =>
    <Part
      key={part.id}
      part={part}
    />
  )

  return (
    <div>
      {partList()}
    </div>
  )
}

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)