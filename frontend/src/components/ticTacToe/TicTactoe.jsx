import React from 'react'
import './tictactoe.css'
function Square({value}){
    function handleClick(){
        console.log('click '+ value);
    }
     return <button className="square" onClick={handleClick}>{value}</button>
}

export default function TicTactoe() {
  return (
    <div>
        <div className="wrapped">
           <Square value="1"/>
           <Square value="2"/>
           <Square value="3"/>
        </div>
        <div className="wrapped">     
            <Square value="4"/>
            <Square value="5"/>
            <Square value="6"/>
        </div>
        <div className="wrapped">
            <Square value="7"/>
            <Square value="8"/>
            <Square value="9"/>
        </div>


    </div>
  )
}
