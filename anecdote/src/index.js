import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))


const PrintAnecdoteWithMostVotes = (props) => {

  const findMostVotes = () => {
    var min = 0
    var pos = 0
    for(let i = 0; i < 6; i++){
      if (props.points[i] > min){
        min = props.points[i]
        pos = i
      }
    }
    return pos
  }
  

  return (
    <div>
      {props.anecdotes[findMostVotes()]}
    </div>

  )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const increaseValue = value => {

    const copy = [...points]
    copy[value] += 1
    setPoints(copy)
  }

  return (
    <div>
      <button onClick={() => increaseValue(selected)}>Vote</button>
      <button onClick={() => setSelected(getRandomInt(6))}>Random Anecdote</button>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>This anecdote has {points[selected]} votes</p>
      <h1>Anecdote with most vote</h1>
      <PrintAnecdoteWithMostVotes anecdotes={anecdotes} points={points} />
    </div>
  )
}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)