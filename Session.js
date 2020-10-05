var express=require('express');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var app=express();
app.use(cookieParser());
app.use(session({secret:'ssh its a secret'}));
app.get('/',function(req,res){
    if(req.session.page_views){
     req.session.page_views++;
     res.send("you have visited " + req.session.page_views +  "times");
    }

     else {
req.session.page_views=1;
res.send("welcome to the page for the first time");
     }
    });
    app.listen(3000); 
