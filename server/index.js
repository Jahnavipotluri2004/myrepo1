const express = require('express')
const cors=require('cors')
const {MongoClient}=require('mongodb')
const app=express()

app.use(cors())
app.use(express.json())
const client= new MongoClient('mongodb+srv://admin:admin@counselling.ompse0r.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db=client.db('counselling')
const col=db.collection('register')
//col.insertOne({"student":"123"})


app.post('/register',(req,res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send('Inserted successfully!')
})
app.get('/retrieve',async(req,res)=>{
    const result=await col.find().toArray()
    console.log(result) 
    res.send(result)
 })
app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})


app.listen('8080',()=>{
    console.log('Server is running')})