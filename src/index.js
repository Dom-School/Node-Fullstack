import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <p>{props.text} {props.value}</p>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {

  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return <p>No feedback given</p>
  }

  const all = props.good + props.neutral + props.bad;
  const average = (all != 0) ? (props.good - props.bad) / all : 0;
  const positive = (all != 0) ? String(props.good / all * 100).concat("%") : 0;

  return (
    <div>
      <h1>statistics</h1>

      <Display value={props.good} text="good" />
      <Display value={props.neutral} text="neutral" />
      <Display value={props.bad} text="bad" />

      <Display value={all} text="all" />
      <Display value={average} text="average" />
      <Display value={positive} text="positive" />
    </div>
  )
}



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))