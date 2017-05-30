var express= require('express');
var path= require('path');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World');
});

app.use(express.static(path.join(__dirname+'/src/client/public')));

app.get('/home', function(req,res){
    res.sendFile(path.join(__dirname+'/src/client/public/index.html'));
});

var server = app.listen(8081,function(){
    
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("localhost listening at host and port http://%s:%s",host,port)
});