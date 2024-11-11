const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json('<h1>Helló<h1>')
})

app.listen(3000, ()=>{
    console.log('A szerver fut...');
    
})