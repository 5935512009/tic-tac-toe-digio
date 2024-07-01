import React,{useState} from 'react'
import './tictactoeInputTest.css'


export default function TictactoeInputTest() {

    const [boardSide,setBoardSide] = useState(3);
    const [board,setBoard] = useState([]);
    const [value,setValue] = useState(null);
//-------------------onClick event ------------------------//
function handleClick(){
    setValue('O');
}


//----------------------รับค่าจาก input มา หลังจากนั้นเอาเข้า function setBoardSide -------------------------//    
    const handleInputChange = (event) =>{
        setBoardSide(event.target.value);
    }
//----------------------หลังกด submit event จะทำงาน-------------------------//
    const handleSubmit = ()=>{
         const newBoard = []; // newboard รับค่า array i j  เพื่อกำหนดตำแหน่ง Square
        if(boardSide){
            
            for(let i=0;i<boardSide;i++){
                const row = []; // ตัวแปรรับ Square ในแต่ละ row
                for(let j=0;j<boardSide;j++){
                    console.log(`[${i}, ${j}]`);
                    row.push(<Square key={`${i}-${j}`} />); // .push ต้อข้อความไปเรื่อยๆใน ตัวแปร row
                }
                newBoard.push(<div key={i} className="board-row">{row}</div>); // หลังหลุด loop j จะเก็บข้อมูลใน newBoard และทำการขึ้นแถวใหม่ตาม css 
            }
         }
         setBoard(newBoard); // เก็บค่า newBoard ในตัวแปร board
    }
    function Square(){
    
        return <button className="square" onClick={handleClick}>{value}</button> // แสดงค่า x,o
   }
    
  return (
    <div>
        <br/>
        <input type="number" name="" id="" value={boardSide} onChange={handleInputChange}/>
      <button type="submit" onClick={handleSubmit}>submit</button>
      <div className='TictactoeInputTest-board'>
        {board.map((board,index)=>(
            <div key={index} >
                {board}
            </div>
        ))}
      </div>
        
    </div>
  )
}
