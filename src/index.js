import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}
const Content = (props) => {
  const items = []

  for (var i = 0; i < props.parts.length; i++) {
    items.push(<p >{props.parts[i]}: {props.exercises[i]}</p>)
  }

  return (
    <div>
      {items}
    </div>
  )
}

const Total = (props) => {
  var count = 0;

  for (var i = 0; i < props.exercises.length; i++) {
    count += props.exercises[i];
  }

  return (
    <p>
      Number of exercises: {count}
    </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part2]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))