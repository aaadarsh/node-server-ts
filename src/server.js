var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send("Home Page of this node server written in TS");
});

app.listen(3000, ()=>{
    console.log('server started');
});