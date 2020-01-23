import React from 'react'

const Courses = ({ courses }) => {

  const courseList = () => courses.map(course =>
    <Course course={course} />
  )

  return (
    <div>
      {courseList()}
    </div>
  )
}

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
    .reduce((prev, next) => {
      console.log(prev, next)
      return prev + next
    });
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

export default Courses