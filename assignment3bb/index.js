const dbConnect = require('./mongodb')
const express = require('express');
const { response } = require('express');
const app=express();
app.use(express.json())

app.get('/', async (req, res)=>{
    let result=await dbConnect();
    result= await result.find().toArray();
    res.send(result);
})


app.post('/', async (req, res) => {
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data Inserted Successfully")
})


//put
app.put('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.updateOne({ name: req.params.name },{ $set: req.body });
    res.send("Data upadated successfully")
})

//delet
app.delete('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.deleteOne({ name: req.params.name });
    res.send("deleted successfully");
})



app.listen(3000);
//console.log("app running");