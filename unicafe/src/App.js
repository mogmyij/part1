import { useState } from 'react'

const Button = (props) => {

  const increaseState = (state, setState) => {
    let newState = state + 1
    setState(newState)
  }

  return (
    <button onClick={() => increaseState(props.state, props.setState)}>{props.text}</button>
  )
}

const StatLine = ({ text, value }) =><tr><td>{text}</td><td>{value}</td>
</tr>
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let firstTime = ((good + neutral + bad) == 0)

  return (
    <div>
      <h1>FeedBack</h1>
      <Button state={good} setState={setGood} text="good" />
      <Button state={neutral} setState={setNeutral} text="neutral" />
      <Button state={bad} setState={setBad} text="bad" />
      <h1>Stats</h1>
      {!firstTime ? (
        <body>
          <table>
          <StatLine text="good: " value={good} />
          <StatLine text="neutral: " value={neutral} />
          <StatLine text="bad: " value={bad} />
          <StatLine text="all: " value={good + neutral + bad} />
          <StatLine text="average" value={(good - bad) / (good + neutral + bad)} />
          <StatLine text="Percentage good:" value={(good / (good + neutral + bad)) * 100} />
          </table>
          
        </body>
      ) : (<p>no stats available</p>)}

    </div>
  )
}

export default App