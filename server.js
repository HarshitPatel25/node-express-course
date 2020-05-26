const express = require('express');
const app = express();

const mockUserData = [
    {name:'Harshit'},
    {name:'patel'}
]

app.get('/users',function(){
    res.json({
      sucess:true,
      message:'sucessfully got user... Nice!!',
      users: mockUserData
    })
})


app.listen(8000,function(){
    console.log("Server is running")
})