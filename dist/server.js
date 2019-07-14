"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send("Home Page of this node server written in TS");
});
app.listen(3000, function () {
    console.log('server started');
});
