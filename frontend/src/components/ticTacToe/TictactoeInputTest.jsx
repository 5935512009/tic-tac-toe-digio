import React,{useState} from 'react'

export default function TictactoeInputTest() {

    const [boardSide,setBoardSide] = useState(3);
//----------------------รับค่าจาก input มา หลังจากนั้นเอาเข้า function setBoardSide -------------------------//    
    const handleInputChange = (event) =>{
        setBoardSide(event.target.value);
    }
//----------------------หลังกด submit event จะทำงาน-------------------------//
    const handleSubmit = ()=>{
        if(boardSide){
            for(let i=0;i<boardSide;i++){
                for(let j=0;j<boardSide;j++){
                    console.log(`[${i}, ${j}]`);
                }
            }
         }
    }
    function Square({value}){
    
        return <button className="square" >hello</button>
   }
    
  return (
    <div>
        <br/>
        <input type="number" name="" id="" value={boardSide} onChange={handleInputChange}/>
      <button type="submit" onClick={handleSubmit}>submit</button>
      
      <Square/>
    </div>
  )
}
