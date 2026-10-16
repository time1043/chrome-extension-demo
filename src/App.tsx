import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const double = count * 2

  function inc() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>
        {count} x 2 = {double}
      </p>
      <button onClick={inc}>Inc</button>
    </div>
  )
}
