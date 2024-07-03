import React,{useState} from 'react'
import './tictactoeInputTest.css'


export default function TictactoeInputTest() {

    const [boardSide,setBoardSide] = useState(3);
    const [board,setBoard] = useState([]);
    const [xIsNext, setXIsNext] = useState(true);

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
    }
//------------------------------------------------------//
const handleSquareClick = (rowIndex,colIndex)=>{
    const newBoard = board.map((row,i)=>
        row.map((square,j)=>{
            if( i===rowIndex && j===colIndex && !square.value) // i===rowIndex ดู index i เป็นตัวแปรชนิดเดียวกับ rowIndex ใหม , j===colIndex ดู index j เป็นตัวแปรชนิดเดียวกับ colIndex ใหม , !square.value  เช็คว่าช่องนั้นๆ ว่างอยู่หรือไม่ก่อนที่เปลี่ยนค่าในช่องนั้น
            {
                if(xIsNext){
                    return {...square, value:'O'}; // set ค่า value
                }
                else{
                    return {...square, value:'X'}; // set ค่า value
                }
                
            }
            setXIsNext(!xIsNext);
            return square;
        })
    );
    setBoard(newBoard);
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
        
    </div>
  )
}
