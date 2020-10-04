var express=require('express');
var app=express();
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));
app.get('/image',function(req,res){
    res.render('test');
});
app.listen(3000);