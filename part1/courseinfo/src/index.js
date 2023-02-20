import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './header'
import { Content } from './content'
import { Total } from './total'

const App = () => {
  const course = 'Half Stack application development',
  part1 = 'Fundamentals of React',
  exercises1 = 10,
  part2 = 'Using props to pass data',
  exercises2 = 7,
  part3 = 'State of a component',
  exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
        />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))