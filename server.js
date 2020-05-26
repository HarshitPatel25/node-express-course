const express = require('express');
const app = express();

const mockUserData = [
    {name:'Harshit'},
    {name:'patel'}
]

app.get('/users/:id',function(req,res){
    console.log(req.params.id)

    res.json({
      sucess:true,
      message:'Got one user!',
      user: req.params.id
    })
})


app.listen(8000,function(){
    console.log("Server is running")
})