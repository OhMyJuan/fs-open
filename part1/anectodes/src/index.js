import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0,])

  const handleNext = () => {
    const nextAnecdote = Math.round(Math.random() * 5)
    setSelected(nextAnecdote)
  }

  const handleVote = async () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes)
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <Anecdote selected={selected} votes={votes} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>Next anecdote</button>
      <Feature votes={votes} />
    </>
  )
}


const Anecdote = ({ selected, votes }) => {
  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
    </>
  )
}


const Feature = ({ votes }) => {

  const maxVotes = Math.max(...votes)

  const index = votes.findIndex((value, i) => {
    if (maxVotes !==value) return false
    return true
  })


  if (maxVotes > 0) {
    return (
      <>
        <h2>Anecdote with most votes</h2>
        <Anecdote selected={index} votes={votes} />
      </>
    )
  } else {
    return (
      <></>
    )
  }

}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)