const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors({
    origin:['http://localhost:4001'],
    methods:['GET'],
    condentails:true,
}));

app.use(express.json());

//================API ZONE==================//

app.get('/api/test',async(req,res)=>{
    res.json('test backend complete');
})

const PORT = 4001;

app.listen(PORT,()=>{
    console.log(`server is running on localhost ${PORT}`);
})