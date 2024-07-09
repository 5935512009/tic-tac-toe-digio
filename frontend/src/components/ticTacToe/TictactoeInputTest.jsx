import React,{useState} from 'react'
import './tictactoeInputTest.css'


export default function TictactoeInputTest() {

    const [boardSide,setBoardSide] = useState(3);
    const [board,setBoard] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner,setWinner] = useState(null);
//----------------------รับค่าจาก input มา หลังจากนั้นเอาเข้า function setBoardSide -------------------------//    
    const handleInputChange = (event) =>{
        setBoardSide(event.target.value);
    }

//----------------------กด submit จะทำการสร้าง board ขึ้นมาตามจำนวน-------------------------//
    const handleSubmit = ()=>{
         const newBoard = []; // newboard รับค่า array i j  เพื่อกำหนดตำแหน่ง Square
        if(boardSide){
            
            for(let i=0;i<boardSide;i++){
                const row = []; // ตัวแปรรับ Square ในแต่ละ row
                for(let j=0;j<boardSide;j++){
                    console.log(`[${i}, ${j}]`);
                    row.push({id:`${i}-${j}`,value:null}); // .push ต้อข้อความไปเรื่อยๆใน ตัวแปร row
                }
                newBoard.push(row); // หลังหลุด loop j จะเก็บข้อมูลใน newBoard และทำการขึ้นแถวใหม่ตาม css 
            }
         }
         setBoard(newBoard); // เก็บค่า newBoard ในตัวแปร board
         setWinner(null); // เมื่อกด reset เก็บ set winner เป็น null เพื่อเริ่ม loop ใหม่
    }
//------------------------------------------------------//
//---------------------*row แนวนอน i | col แนวตั้งเทียบ j--------------------------//
const handleSquareClick = (rowIndex,colIndex)=>{
    if (board[rowIndex][colIndex].value || winner) return; // หาก board ตำแหน่งที่ [i,j] มี value หรือ winner ไม่เท่ากับ null จะทำการ return เพื่อไม่ให้ใส่ค่าเพิ่ม
    const newBoard = board.map((row,i)=>
        row.map((square,j)=>{
            if( i===rowIndex && j===colIndex && !square.value) // i===rowIndex ดู index i เป็นตัวแปรชนิดเดียวกับ rowIndex ใหม , j===colIndex ดู index j เป็นตัวแปรชนิดเดียวกับ colIndex ใหม , !square.value  เช็คว่าช่องนั้นๆ ว่างอยู่หรือไม่ก่อนที่เปลี่ยนค่าในช่องนั้น
            {
                if(i===rowIndex && j===colIndex){
                    return {...square, value: currentPlayer }; // set ค่า value
                }
            }
            return square;
            
        })
        
    );
    setBoard(newBoard);
    
        // Check rows, columns, and diagonals for a win
        if (checkWinner(newBoard, currentPlayer)) {
            // checkWinner เป็น true เมื่อไรจะืำการ setWinner เพื่อหยุดเกมส์
            setWinner(currentPlayer);
        }else {
            // เปลี่ยน Current player เมื่อเงื่อนไขแรกไม่เป็นจริง
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
          }
          
    
    
}

const checkWinner = (board,player) => {
    // loop ตามขนาด board
    for(let i=0;i<boardSide;i++){
        
        // check ว่า value ตามแถวแนวนอน ว่ามี player เป็นตัวเดียวกันใหมถ้าใช้จะ return ture เพื่อ setWinner 
        if(board[i].every(square => square.value === player )){
            return true;
        }
        // check ว่า value ตามแถวแนวตั้ง ว่ามี player เป็นตัวเดียวกันใหมถ้าใช้จะ return ture เพื่อ setWinner 
        if(board.every(row =>row[i].value === player)){
            return true;
        }   
    }
        // check เงื่อนไข row กับเลข index ในที่นี้คือ j เพื่อตรวจสอบว่า value เป็นค่าเดียวกับใหม เพื่อหาค่ามุมทะแยงจากด้านซ้ายไปขวา
        if(board.every((row,index)=>row[index].value === player)){
            return true;
        }
        // check เงื่อนไข row จากขวาไปซ้าย
        // boardSide - 1 คือ  index ของคอลัมน์สุดท้าย เช่น [0,0] [0,1] [0,2] ในที่นี้คือ 2
        if(board.every((row,index)=>row[boardSide - 1 - index ].value=== player)){
            return true;
        }

    return false;
}
    function Square({value, onClick}){
    
        return <button className="square" onClick={onClick}>{value}</button> // แสดงค่า x,o
   }
    
  return (
    <div>
        <br/>
        <input type="number" name="" id="" value={boardSide} onChange={handleInputChange}/>
      <button type="submit" onClick={handleSubmit}>submit</button>
      <div className='TictactoeInputTest-board'>
        {board.map((row,rowIndex)=>(
            <div key={rowIndex} >
                {row.map((square,colIndex)=>(
                    <Square 
                        key={square.id}
                        value={square.value}
                        onClick={()=>handleSquareClick(rowIndex,colIndex)}
                    />
                ))}
            </div>
        ))}
      </div>
        <div>{winner&& <div>winner is {winner}</div>}</div> 
        {/* จะทำงานเพื่อ winner เปลี่ยนค่า */}
    </div>
  )
}
