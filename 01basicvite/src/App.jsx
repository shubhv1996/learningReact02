import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => setCount(count+1);
  const decreaseCount = () => {
    if(count === 0) return;
    setCount(count-1)};

  return (
    <>
      <h1>Learning React with vite {count}</h1>
      <h2>count: {count}</h2>
      <button onClick={increaseCount}>Increase count</button>{" "}
      <button onClick={decreaseCount}>Decrease count</button>
      <footer>footer: {count}</footer>
        
    </>
  )
}

export default App
