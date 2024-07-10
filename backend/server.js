const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { MongoGCPError } = require('mongodb');


dotenv.config();
const app = express();

app.use(cors({
    origin:['http://localhost:4001'],
    methods:['GET'],
    condentails:true,
}));
app.use(express.json());

//================connnect with MongoDB==================//
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Connected to MongoDB success');
    })
    .catch((error)=>{
        console.error('Error connecting to MongoDB:', error.message);
    })
//===============Schema zone==================//
const roundSchema = new mongoose.Schema({
    RoundId:Number,
    Size:Number,
    Timestamp: { type: Date, default: Date.now }
})
const roundDetailSchema = new mongoose.Schema({
    RoundId:Number,
    OrderId:Number,
    Player:String,
    Position:String,
    Winner:String
})

const Round = mongoose.model('Round',roundSchema,'RoundTable');
const RoundDetail = mongoose.model('RoundDetail',roundDetailSchema,'RoundDetailTable');

//================API ZONE==================//
app.get('/api/test',async(req,res)=>{
    res.json('test backend complete');
})

app.get('/api/Round', async (req,res)=>{
    try{
        const Rounds = await Round.find();
        res.json(Rounds);
    }catch(error){
        res.status(500).json({message : error.message});
    }
})

app.get('/api/RoundDetail', async(req,res)=>{
    try{
        const RoundDetails = await RoundDetail.find();
        res.json(RoundDetails);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
})
//=====================Round + RoundDetail แสดงรายละเอียด========================//
app.get('/api/RoundAndDetail', async(req,res)=>{
    try{
        //=========================ไม่ได้แต่เอาเป็นแบบ=========================//
        const RoundAndDetail = await Round.aggregate([{
            $lookup:{
                from:'RoundDetailTable',
                localField:"RoundId",
                foreignField:"RoundId",
                as:"RoundDetail"
            }
        }]);
        res.json(RoundAndDetail);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})


const PORT = 4001;

app.listen(PORT,()=>{
    console.log(`server is running on localhost ${PORT}`);
})