import React,{useState} from 'react'
import './tictactoe.css'
function Square(){
    const [value, setValue] = useState(null);

    function handleClick(){
        setValue('x');
    }
     return <button className="square" onClick={handleClick}>{value}</button>
}

export default function TicTactoe() {
  return (
    <div>
        <div className="wrapped">
           <Square />
           <Square />
           <Square />
        </div>
        <div className="wrapped">     
            <Square />
            <Square />
            <Square />
        </div>
        <div className="wrapped">
            <Square />
            <Square />
            <Square />
        </div>


    </div>
  )
}
