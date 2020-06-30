import React from 'react'

function App() {
  return (
    <main>
      <body>
        <section>
          <form name="calculator">
            <input class="answerInput" type="text" name="answer" value="0" />
            <article>
              <input
                class="acButton"
                type="button"
                value=" AC "
                onclick="calculator.answer.value += '1'"
              />
              <input
                type="button"
                value=" ÷ "
                onclick="calculator.answer.value += '2'"
              />
            </article>
            <article>
              <input
                type="button"
                value=" 7 "
                onclick="calculator.answer.value += '1'"
              />
              <input
                type="button"
                value=" 8 "
                onclick="calculator.answer.value += '2'"
              />
              <input
                type="button"
                value=" 9 "
                onclick="calculator.answer.value += '3'"
              />
              <input
                type="button"
                value=" + "
                onclick="calculator.answer.value += '+'"
              />
            </article>
            <article>
              <input
                type="button"
                value=" 4 "
                onclick="calculator.answer.value += '4'"
              />
              <input
                type="button"
                value=" 5 "
                onclick="calculator.answer.value += '5'"
              />
              <input
                type="button"
                value=" 6 "
                onclick="calculator.answer.value += '6'"
              />
              <input
                type="button"
                value=" - "
                onclick="calculator.answer.value += '-'"
              />
            </article>
            <article>
              <input
                type="button"
                value=" 1 "
                onclick="calculator.answer.value += '7'"
              />
              <input
                type="button"
                value=" 2 "
                onclick="calculator.answer.value += '8'"
              />
              <input
                type="button"
                value=" 3 "
                onclick="calculator.answer.value += '9'"
              />
              <input
                type="button"
                value=" + "
                onclick="calculator.answer.value += '*'"
              />
            </article>
            <article>
              <input
                class="longButtons"
                type="button"
                value=" 0 "
                onclick="calculator.answer.value = ''"
              />
              <input
                type="button"
                value=" . "
                onclick="calculator.answer.value += '0'"
              />
              <input
                type="button"
                value=" = "
                onclick="calculator.answer.value = eval(calculator.answer.value)"
              />
            </article>
          </form>
        </section>
      </body>
    </main>
  )
}

export default App
