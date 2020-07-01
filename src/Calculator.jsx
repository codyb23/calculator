import React, { useState } from 'react'

export function Calculator() {
  const initialValue = 0
  const [chosenNumber, setChosenNumber] = useState(parseFloat(initialValue))
  const [prevValue, setPrevValue] = useState(parseFloat(initialValue))
  const [operation, setOperation] = useState('')

  console.log(chosenNumber)
  console.log(operation)
  console.log(prevValue)

  const setNumberFromButton = (event) => {
    if (chosenNumber === parseFloat(initialValue)) {
      setChosenNumber(event)
    } else {
      const numberFromButton = isNaN(chosenNumber) ? '' : chosenNumber
      setChosenNumber(numberFromButton + event)
    }
  }

  const setAfterOperation = () => {
    setChosenNumber('')
    setOperation('')
  }

  const setOperationType = (type) => {
    if (!prevValue) {
      setPrevValue(chosenNumber)
      setChosenNumber('')
    }
    setOperation(type)
  }

  const clearAll = () => {
    setChosenNumber(0)
    setOperation('')
    setPrevValue(0)
  }

  const getCalc = (operation) => {
    console.log(chosenNumber)
    console.log(prevValue)

    if (chosenNumber === '') {
      setChosenNumber('0')
    }
    switch (operation) {
      case '+':
        setPrevValue(parseFloat(prevValue) + parseFloat(chosenNumber))
        setAfterOperation()
        break
      case '-':
        setPrevValue(parseFloat(prevValue) - parseFloat(chosenNumber))
        setAfterOperation()
        break
      case '*':
        setPrevValue(parseFloat(prevValue) * parseFloat(chosenNumber))
        setAfterOperation()
        break
      case '/':
        setPrevValue(parseFloat(prevValue) / parseFloat(chosenNumber))
        setAfterOperation()
        break
      default:
        break
    }
  }
  return (
    <div className="calculator">
      <div className="display">
        {chosenNumber !== ''
          ? chosenNumber
          : '' === operation
          ? prevValue
          : chosenNumber}
      </div>
      <div className="buttons">
        <button className="button x3 fn" onClick={() => clearAll()}>
          AC
        </button>
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
        <button
          className="button"
          onClick={(e) => setNumberFromButton(e.target.value)}
          value="."
        >
          .
        </button>
        <button
          className="button op"
          onClick={(event) => {
            getCalc(operation)
          }}
        >
          &#61;
        </button>
      </div>
    </div>
  )
}
