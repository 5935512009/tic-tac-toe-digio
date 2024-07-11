import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './tictactoeRoundList.css'
export default function TictactoeRoundList() {
    const [round,roundList]= useState([])
    useEffect(()=>{
        axios
            .get("http://localhost:4001/api/Round")
            .then((res)=>{
                roundList(res.data);
                console.log(res.data);
            })
            .catch((error)=>{
                console.log(error)
            })
            
    },[]);
  return (
    <div>
      play list 
        {round.map((rounds,index)=>(
            <div className='roundlist' key={index}>
                <br/>
                Round : {rounds.RoundId}  Size  : {rounds.Size} Time : {rounds.Timestamp}
            </div>
        ))}
    </div>
  )
}
