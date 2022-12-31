import { useState } from 'react'
import Board from './components/Board'
import './style/root.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
     <h1>Tic Tac Toe</h1>
     <Board/>
    </div>
  )
}

export default App
