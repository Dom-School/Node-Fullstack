import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//const Display = props => <p>{props.text} {props.value}</p>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return <p>No feedback given</p>
  }

  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = String(props.good / all * 100).concat("%");

  return (
    <div>
      <h1>statistics</h1>

      <table>
        <Statistic value={props.good} text="good" />
        <Statistic value={props.neutral} text="neutral" />
        <Statistic value={props.bad} text="bad" />

        <Statistic value={all} text="all" />
        <Statistic value={average} text="average" />
        <Statistic value={positive} text="positive" />
      </table>
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