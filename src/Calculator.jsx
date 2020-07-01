import React, { useState } from 'react'

export function Calculator() {
  const initialValue = 0
  const [chosenOperand, setChosenOperand] = useState(parseFloat(initialValue))
  const [prevOperand, setPrevOperand] = useState(parseFloat(initialValue))
  const [operator, setOperator] = useState('')

  console.log(chosenOperand)
  console.log(operator)
  console.log(prevOperand)

  const setNumberFromButton = (event) => {
    if (chosenOperand === parseFloat(initialValue)) {
      setChosenOperand(event)
    } else {
      const numberFromButton = isNaN(chosenOperand) ? '' : chosenOperand
      setChosenOperand(numberFromButton + event)
    }
  }

  const setAfterOperation = () => {
    setChosenOperand('')
    setOperator('')
  }

  const setOperationType = (type) => {
    if (!prevOperand) {
      setPrevOperand(chosenOperand)
      setChosenOperand('')
    }
    setOperator(type)
  }

  const clearAll = () => {
    setChosenOperand(0)
    setOperator('')
    setPrevOperand(0)
  }

  const getCalc = (operation) => {
    console.log(chosenOperand)
    console.log(prevOperand)

    if (chosenOperand === '') {
      setChosenOperand('0')
    }
    switch (operation) {
      case '+':
        setPrevOperand(parseFloat(prevOperand) + parseFloat(chosenOperand))
        setAfterOperation()
        break
      case '-':
        setPrevOperand(parseFloat(prevOperand) - parseFloat(chosenOperand))
        setAfterOperation()
        break
      case '*':
        setPrevOperand(parseFloat(prevOperand) * parseFloat(chosenOperand))
        setAfterOperation()
        break
      case '/':
        setPrevOperand(parseFloat(prevOperand) / parseFloat(chosenOperand))
        setAfterOperation()
        break
      default:
        break
    }
  }
  return (
    <div className="calculator">
      <div className="display">
        {chosenOperand !== ''
          ? chosenOperand
          : '' === operator
          ? prevOperand
          : chosenOperand}
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
            getCalc(operator)
          }}
        >
          &#61;
        </button>
      </div>
    </div>
  )
}
