const express =require('express');
const mongoose=require('mongoose');
const keys =require('./config/keys');

mongoose.connect(keys.mongoURI, () => {
    console.log('db is connected');
})

const app=express();

app.get('/express',(req,res)=>{

    res.send({hi:'there'});
});
const PORT=process.env.PORT || 5000;
app.listen(PORT);