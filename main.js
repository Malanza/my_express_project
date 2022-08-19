const express = require('express');
const app = express();

app.get('/hello', function(req,res){
    res.send('This actually works!')
})
app.get('/hello/1', function(req,res){
    res.send('hello!')
})


app.post('/', function(req,res){
    res.end('go to /hello')
})

app.listen(3000, function(){
console.log('server is running');
})