import { useState } from 'react'
import styled from "styled-components"
import './App.css'
import Startgame from './components/Startgame'
import Gamepage from './components/Gamepage'

function App() {
   const [start, setStart] = useState(false);

   const gameStart = () => {
    setStart((prev) => !prev)
   }
  

  return (
    <Main>
      {start ? <Gamepage /> : <Startgame setStart={gameStart}/>}
    </Main>
  )
}

export default App

const Main = styled.div`
`