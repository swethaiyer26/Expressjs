var express=require('express');
var app=express();
app.use(function(req,res,next){
    console.log("A new request received at " + Date.now());
    // function/route handler
    next();
});
app.listen(3000);