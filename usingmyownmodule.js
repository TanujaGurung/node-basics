var http = require("http")
const dateMod =  require('./creatingownmodule')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/html"});
    res.write("my own module dat"+ dateMod.myDate());
    res.end()
}).listen(8080)