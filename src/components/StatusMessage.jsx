import React from 'react'
function StatusMessage({winner,current}) {
   const noMoveLeft =current.board.every(el=>el !== null);
    return (
        <div><h2>{winner && `Winner is ${winner}🥳`}
        {!winner && !noMoveLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
        {!winner&& noMoveLeft &&`X and O is tied`}</h2></div>
    )
  
}
export default StatusMessage;
