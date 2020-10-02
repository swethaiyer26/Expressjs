var express=require('express');
var app=express();
app.set('view engine','pug');
app.set('views','./views');

app.get('/dynamic',function(req,res){
    res.render('Login',{
        // user:{name:"Alan",age:"40"}
    });
});
app.listen(3000);