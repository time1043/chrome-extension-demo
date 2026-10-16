import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const double = count * 2

  function inc() {
    setCount(count + 1)
  }

  return (
    <div className="p-4">
      <p>
        {count} x 2 = {double}
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={inc}
      >
        Inc
      </button>
    </div>
  )
}
