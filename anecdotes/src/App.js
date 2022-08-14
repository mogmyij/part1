import { useState } from 'react'

const DisplayAnecdotes = ({ text }) => <h1>{text}</h1>

const Button = (props) => <button onClick={props.callback}>{props.text}</button>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const defaultVotesArray=Array(7).fill(0)
  const [votesArray, setVotes] = useState(defaultVotesArray)

  const randomiseSelected = () => {
    let randNumber = Math.floor(Math.random() * 7)

    setSelected(randNumber)
  }

  const castVote = () => {
    let newVoteArray = [...votesArray]
    newVoteArray[selected] += 1

    noVotes=false
    setVotes(newVoteArray)
  }

  let noVotes = votesArray == defaultVotesArray
  return (
    <div>
      <DisplayAnecdotes text={anecdotes[selected]} />
      <Button callback={randomiseSelected} text="next quote" />
      <Button callback={castVote} text="Up Vote" />
      <br />
      {console.log(noVotes, votesArray, votesArray == Array(7).fill(0))}
      {!noVotes &&
        <div>
          <DisplayAnecdotes text={anecdotes[votesArray.indexOf(Math.max(...votesArray))]} />
          <p>has the most votes at: {Math.max(...votesArray)}</p>
        </div>
      }
    </div>
  )
}

export default App