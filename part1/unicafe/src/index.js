import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Form setGood={setGood} good={good} setNeutral={setNeutral} neutral={neutral} setBad={setBad} bad={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


// Form Component
const Form = ({ setGood, good, setNeutral, neutral, setBad, bad }) => {

  const handleVote = (e) => {
    const option = e.target.value
    let vote = 0;

    switch (option) {
      case "good":
        vote = good + 1
        return setGood(vote)
      case "neutral":
        vote = neutral + 1
        return setNeutral(vote)
      case "bad":
        vote = bad + 1
        return setBad(vote)
      default:
        break;
    }

  }

  return (
     <div>
        <h2>Give Feedback</h2>
        <div>
          <button value="good" onClick={handleVote}>good</button>
          <button value="neutral" onClick={handleVote} >neutral</button>
          <button value="bad" onClick={handleVote}>bad</button>
        </div>
      </div>
  )
}


// Statistics Component
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const positive = `${((good / total) * 100).toFixed(2)}%`

  const avg = () => {
    const positive = good * 1
    const negative = bad * -1
    const avg = ((positive + negative) / total).toFixed(2);

    return avg
  }

  return (
    <div>
      <h2>Statistics</h2>
      { total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={total} />
            <Statistic text="Average" value={avg()} />
            <Statistic text="Positive" value={positive} />
          </tbody>
        </table>
        )
      }
    </div>
  )
}


// Statistic Component
const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)