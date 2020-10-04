var express=require('express');
var app=express();
app.get('/',function(req,res){
     res.cookie('name','express').send('cookie set');
    // res.cookie(name,'express',{expire:360000 + Date.now()});
  
});
app.listen(3000);