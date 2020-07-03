import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(0)
  const [leftOperand, setLeftOperand] = useState()
  const [rightOperand, setRightOperand] = useState()
  const [operator, setOperator] = useState('')

  console.log(leftOperand)
  console.log(operator)
  console.log(rightOperand)

  const setNumberFromButton = (event) => {
    if (leftOperand === undefined) {
      setLeftOperand(event)
      setDisplay(event)
    } else {
      setLeftOperand(leftOperand + event)
      setDisplay(leftOperand + event)
    }
  }

  const setAfterOperation = () => {
    setLeftOperand('')
    setOperator('')
  }

  const setOperationType = (type) => {
    if (!rightOperand) {
      setRightOperand(leftOperand)
      setLeftOperand('')
    }
    setOperator(type)
  }

  const clearAll = () => {
    setLeftOperand()
    setOperator('')
    setRightOperand()
    setDisplay(0)
  }

  const getCalc = (operation) => {
    console.log(leftOperand)
    console.log(rightOperand)

    let answer

    switch (operation) {
      case '+':
        answer = parseFloat(rightOperand) + parseFloat(leftOperand)
        setAfterOperation()
        break
      case '-':
        answer = parseFloat(rightOperand) - parseFloat(leftOperand)
        setAfterOperation()
        break
      case '*':
        answer = parseFloat(rightOperand) * parseFloat(leftOperand)
        setAfterOperation()
        break
      case '/':
        answer = parseFloat(rightOperand) / parseFloat(leftOperand)
        setAfterOperation()
        break
    }
    setDisplay(answer)
    setRightOperand()
  }
  return (
    <div className="calculator">
      <div className="display">{display}</div>
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
