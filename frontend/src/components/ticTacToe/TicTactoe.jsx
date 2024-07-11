import React,{useState} from 'react'
import './tictactoe.css'
import TictactoeInputTest from './TictactoeInputTest'
import TictactoeRoundList from './TictactoeRoundList';
function Square({value, onSquareClick}){
    
     return <button className="square" onClick={onSquareClick} >{value}</button>
}

export default function TicTactoe() {
    const [square,setSquare] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(square);
    let status;
    if(winner){
        status ="Winner: " + winner;
    }else{
        status ="Next player: "+ (xIsNext?"x":"O");
    }
    //--------------------test set boardSide---------------------------//
    // const boardSide = 4;
    // if(boardSide){
    //     for(let i=0;i<boardSide;i++){
    //         for(let j=0;j<boardSide;j++){
    //             console.log(`Processing cell (${i}, ${j})`);
    //         }
    //     }
    // }

    function handleClick(i){
        if(square[i] || calculateWinner(square)){
            return; // check square ค่าใหม ถ้ามีจะ return ทำให้คลิกซ้ำไม่ได้
        }
        const nextSqure = square.slice(); // copy array
        if(xIsNext){
            nextSqure[i] = "X";
        }
        else{
            nextSqure[i] = "O";
        }
        setSquare(nextSqure);
        setXIsNext(!xIsNext)
    }

  return (
    <div className="ticTactoe">
        <div className="status">{status}</div>
        <div className="wrapped">
           <Square value={square[0]} onSquareClick={() => handleClick(0)} />
           <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
           <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="wrapped">     
            <Square value={square[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={square[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={square[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="wrapped">
            <Square value={square[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={square[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={square[8]} onSquareClick={() => handleClick(8)}/>
        </div>


    <div className="tictactoe">
        <TictactoeInputTest/>
    </div>
        <TictactoeRoundList/>
    </div>
  )
}

function calculateWinner(square){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c] =lines[i]
        if(square[a]&&square[a] === square[b] && square[a] === square[c]){
            return square[a];
        }
    }
    return null;
}