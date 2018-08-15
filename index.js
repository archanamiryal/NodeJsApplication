var express=require('express');

var app=express();

app.get('/',function(request,response)
{
    response.sendFile(__dirname+"/index.html");
});
app.get('/hello',function(request,response)
{
    response.send("Hello ! how are you");
});

var port = process.env.port || 8080;
var server=app.listen(port,function(request,response)
{
    console.log("Catch the action at http://localhost:"+port);
});