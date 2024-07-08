# tic-tac-toe-digio
เริ่ม project 27/06/2024 <br />
&nbsp; frontend ==> ReactJS <br />
&nbsp; backend  ==> NodeJS,express <br />
&nbsp; database ==> MongoDB <br />
//---------------------------------วิธีการติดตั้งโปรเจค--------------------------------------// <br />
เปิด project <br />
&nbsp; หลังจาก clone project แล้วให้ทำตามดังนี้ <br />
&nbsp; cd เข้าไฟล์ tic-tac-toe-digio เข้าไฟล์ frontend แล้วใช้คำสั่ง npm i <br />
&nbsp; cd เข้าไฟล์ tic-tac-toe-digio เข้าไฟล์ backend แล้วใช้คำสั่ง npm i <br />
&nbsp; เข้าไฟล์ backend โดยใช้คำสั่ง cd backend หลังจากนั้น ใช้คำสั่ง npm start <br />
&nbsp; เข้าไฟล์ frontend โดยใช้คำสั่ง cd frontend หลังจากนั้น ใช้คำสั่ง npm start <br />
//-----------------------------version project-------------------------------//<br />
&nbsp; version 1 board 3x3 <br />
&nbsp; version 2 Unlimites boards <br />
&nbsp; &nbsp; - หน้า TictactoeInputTest.jsx <br />
//-----------------------------การทำงานเบื้องต้น----------------------------------------//<br /> 8/07/2024
&nbsp; สร้าง input รับค่าขนาด board ขึ้นมา จากนั้น ใช้ for loop ในการสร้าง (loop i, loop j) <br />
&nbsp; ตัวอย่าง index [0,0] [0,1] [0,2] โดยค่าใน index กำหนดให้ value: null <br />
&nbsp; อ้างอิงตำแหน่ง โดยใช้ index ใช้ handleSquareClick เพื่อเปลี่ยนค่าในตำแหน่งนั้น ๆ  โดยจะเปลี่ยนค่า value ตาม currentPlayer ในแต่ละรอบ<br />

//-----------------------------เงื่อนไขการชนะ----------------------------------------//<br />
&nbsp; มี 3 แบบคือ row column และ diagonal <br />
&nbsp; 1. row => แถวแนวนอน <br />
&nbsp; 2. column => แถวแนวตั้ง <br />
&nbsp; 3. diagonal => มุมทะแยง <br /><br />

//-----------------------------การเก็บข้อมูลขึ้น mongoDB----------------------------------------//<br />
&nbsp; 1. มี tables 2 อัน <br />
<u>tables 1 <u/>RouteTable ใช้เก็บ RouteId เพื่อใช้ทำ replay<br />
example field <br />
|RouteId|size|TimeStamp|<br />
1         3     ----- <br />
2         4     ----- <br /><br />

<u>tables 2 <u/> RouteDetailTable ใช้เก็บลำดับการเล่นในแต่ละรอบ <br />
OrderId|RouteId|Player|Position|Winner   <br />
1       1       X      [0,0]     null   <br />
2       1       O      [0,1]     null   <br />
....                                    <br />
6       1       X      [2,2]     X      <br />
 
