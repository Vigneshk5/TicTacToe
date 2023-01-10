import React, { useState } from 'react';
import Board from './components/Board';
import { calaculateWinner} from './helpers';
import History from './components/History';
import StatusMessage from './components/StatusMessage';


import './style/root.scss';

const App = () => {
  const NewGame =[ { board: Array(9).fill(null), isXNext: true }];
  const [history, setHistory] = useState(NewGame);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const {winner,winningCombination} = calaculateWinner(current.board);
  

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };
  
  const moveTo=(move)=>{
    setCurrentMove(move);
  }
   
  const onNewGame =()=>{
 setHistory(NewGame);
 setCurrentMove(0);
  }

  return (
    <div className="app">
      <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningCombination={winningCombination}/>
      <button className={`btn-reset ${winner ? 'active':''}`} type='button' onClick={onNewGame}>New Game</button>
      <h2 style={{fontWeight:'normal'}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className='bg-balls'></div>
    </div>
  );
};

export default App;