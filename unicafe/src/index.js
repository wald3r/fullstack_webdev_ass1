import React, {useState}from 'react';
import ReactDOM from 'react-dom';


const DisplayingText = (props) => {
  
  return(
      <tbody>
        <tr>
            <td >{props.title}</td>
            <td >{props.value}</td>
        </tr>
      </tbody>
  )
}


const Statistics = ({goodCounter, neutralCounter, badCounter, button1, button2, button3}) => {
  
  
  if (goodCounter > 0 || neutralCounter > 0 || badCounter > 0){
    return (
      <div>
        <h1>Statistics</h1>
        <table>
        <DisplayingText title={button1} value={goodCounter} />
        <DisplayingText title={button2} value={neutralCounter} />
        <DisplayingText title={button3} value={badCounter} />

        <DisplayingText title="all" value={goodCounter+neutralCounter+badCounter} />
        <DisplayingText title="average" value={(goodCounter+neutralCounter+badCounter)/3} />
        <DisplayingText title="positive" value={(100*(goodCounter+neutralCounter))/(goodCounter+neutralCounter+badCounter)} />
        </table>
      </div>
    )
  }

  return(
    <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
    </div>
  )
}

const Button = (proper) => {

  return(
      <button onClick={proper.function}>{proper.title}</button>
  )


}


const App = (props) => {
  const [goodCounter, setCounter1] = useState(0)
  const [neutralCounter, setCounter2] = useState(0)
  const [badCounter, setCounter3] = useState(0)


  const setToValue1 = (value) => setCounter1(value)
  const setToValue2 = (value) => setCounter2(value)
  const setToValue3 = (value) => setCounter3(value)

  const header = 'give feedback'
  const button1 = 'good'
  const button2 = 'neutral'
  const button3 = 'bad'

  return (
    <div>
      <div><h1>{header}</h1></div>
      <Button function={() => setToValue1(goodCounter + 1)} title={button1} />
      <Button function={() => setToValue2(neutralCounter + 1)} title={button2} />
      <Button function={() => setToValue3(badCounter + 1)} title={button3} />
      <Statistics button1={button1} button2={button2} button3={button3} goodCounter={goodCounter} badCounter={badCounter} neutralCounter={neutralCounter} />
    </div>
  )

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
