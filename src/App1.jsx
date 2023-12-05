import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App1.css'
//import Timer from './components/timer'
import AllTAsks from './components/AllTAsks'
import React from 'react'
import Button from './components/button'
import Clock from './components/Clock'
const MainTitle = () => {
  return (
    <h1>hello!</h1>
  )
}

function App() {
  return (<>
    <MainTitle />
    <h1>I'm your Personal secretary</h1>
    <main>
      < AllTAsks />
      <Clock/>
      <Button/>
    </main>
  </>
  )


}

export default App
