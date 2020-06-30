import React, { useState } from 'react'

function App() {
  const [chosenNumber, setChosenNumber] = useState(0)
  const [operation, setOperation] = useState('')

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const buttons = numbers[chosenNumber]

  console.log(buttons)
  console.log(operation)

  const setNumberFromButton = (event) => setChosenNumber(event)
  const setOperationType = (type) => setOperation(type)
  return (
    <main>
      <div className="calculator">
        <div className="display">
          {chosenNumber}
          {operation}
        </div>
        <div className="buttons">
          <button className="button fn">AC</button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button className="button op" onClick={() => setOperationType('/')}>
            &#247;
          </button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="7"
          >
            7
          </button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="8"
          >
            8
          </button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="9"
          >
            9
          </button>
          <button className="button op" onClick={() => setOperationType('*')}>
            &#215;
          </button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="4"
          >
            4
          </button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="5"
          >
            5
          </button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="6"
          >
            6
          </button>
          <button className="button op">&#8722;</button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="1"
          >
            1
          </button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="2"
          >
            2
          </button>
          <button
            className="button"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="3"
          >
            3
          </button>
          <button className="button op">&#43;</button>
          <button
            className="button x2"
            onClick={(event) => setNumberFromButton(event.target.value)}
            value="0"
          >
            0
          </button>
          <button className="button">.</button>
          <button className="button op">&#61;</button>
        </div>
      </div>
    </main>
  )
}

export default App
