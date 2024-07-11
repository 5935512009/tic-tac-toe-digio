import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function TictactoeRoundReplay() {
    const [roundDetail,setRoundDetail] = useState([]);
    useEffect(()=>{
        axios
            .get("http://localhost:4001/api/RoundAndDetail")
            .then((res)=>{
                console.log(res.data);
                setRoundDetail(res.data);
            })
            .catch((error)=>{
                console.log(error)
            })
    },[]);
    return (
    <div>
      TictactoeRoundReplay
      {roundDetail.map((detail,index)=>(
        <div key={index}>
            Round:{detail.RoundId}  board side {detail.Size} <br/>
            RoundDetails:
            {detail.RoundDetail.map((rd, rdIndex)=>(
                <div key={rdIndex}>
                    OrderId: {rd.OrderId}, Player: {rd.Player}, Position: {rd.Position}, Winner: {rd.Winner}
                </div>
            ))}
        </div>
      ))}
    </div>
  )
}
