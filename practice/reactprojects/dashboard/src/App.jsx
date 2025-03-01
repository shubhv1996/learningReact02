import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './components/Sidenav'
import Topnav from './components/Topnav'

function App() {
  const [isShown, setIsShown] = useState(true)
  const toggle = () => {
    setIsShown(prev => !prev)
  }

  return (
    <>
      <div className="flex">
        {isShown ? <Sidenav toggle={toggle} isShown={isShown}/> : ""}
        <Topnav toggle={toggle} isShown={isShown} />
      </div>
    </>
  );
}

export default App
