 import React from 'react'
 
 const Square = ({value,onClick,isWinningC}) => {
   return (
     <button  type="button" className="square" onClick={onClick}
     style={{fontWeight:isWinningC ? 'bold' : 'normal' }}
     >{value}</button>
   );
 };
 
 export default Square;