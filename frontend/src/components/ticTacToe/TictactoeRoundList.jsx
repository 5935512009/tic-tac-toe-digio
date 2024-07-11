import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TictactoeRoundList() {
    const [round,roundList]= useState([])
    useEffect(()=>{
        axios
            .get("http://localhost:4001/api/Round")
            .then((res)=>{
                roundList(res.data);
            })
            .catch((error)=>{
                console.log(error)
            })
    })
  return (
    <div>
      play list 

    </div>
  )
}
