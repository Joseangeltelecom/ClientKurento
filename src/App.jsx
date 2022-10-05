import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Title from './components/Title'
import MainContainer from './components/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Title />
      <MainContainer />
    </div>
  )
}

export default App
