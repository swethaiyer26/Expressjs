var express=require('express');
var express=require('express');
var app=express();
app.get('/',function(req,res){
    req.cookie('name','express').send('cookie set');
    console.log('Cookies',req.cookies);
  
});
app.listen(3000);