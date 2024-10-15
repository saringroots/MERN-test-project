const express=require('express')
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const UserModel=require('./Users')
const cors=require('cors')

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://sarintest:Sarin_groots@groots.fmsca.mongodb.net/?retryWrites=true&w=majority&appName=groots', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
app.get("/",(req,resp)=>
{
    UserModel.find({})
    .then(mongocollection =>resp.json(mongocollection))
    .catch(err =>resp.json(err))
})
app.post("/createuser",(req,resp)=>{
    UserModel.create(req.body)
    .then(mongocollection =>resp.json(mongocollection))
    .catch(err =>resp.json(err))

})


app.listen(3001,()=>
{
    console.log("sever is running ");
})