import React, { useState } from 'react'

function App() {
  const initialValue = 0
  const [chosenNumber, setChosenNumber] = useState(parseInt(initialValue))
  const [prevValue, setPrevValue] = useState()
  const [operation, setOperation] = useState('')

  console.log(chosenNumber)
  console.log(operation)

  const setNumberFromButton = (event) => {
    if (chosenNumber === parseInt(initialValue)) {
      setChosenNumber(event)
    } else {
      const numberFromButton = isNaN(chosenNumber) ? '' : chosenNumber
      setChosenNumber(numberFromButton + event)
    }
  }
  const setOperationType = (type) => setOperation(type)

  const clearAll = () => {
    setChosenNumber(0)
    setOperation('')
    setPrevValue()
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{chosenNumber}</div>
        <div className="buttons">
          <button className="button fn" onClick={() => clearAll()}>
            AC
          </button>
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
          <button className="button op" onClick={() => setOperationType('-')}>
            &#8722;
          </button>
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
          <button className="button op" onClick={() => setOperationType('+')}>
            &#43;
          </button>
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
