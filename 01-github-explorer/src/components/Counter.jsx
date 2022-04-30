import { useState} from 'react'

export function Counter() {
  const [counter, useCounter] = useState(0);

  function Increment() {
    useCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button 
        type="button" onClick={Increment}>
          Incrementing +1
      </button>
    </div>
  )
}
