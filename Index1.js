var express=require('express');
var app=express();
var things=require('./Things.js');
app.use('/things',things);
app.listen(3000);