const http=require('http');
const fs=require('fs');

const server=http.createServer();

server.on('request',(req,res)=> {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    const filename="week9-p1-1.html";
    fs.readFile(filename,(err,data)=>{
        if(err==null){
        res.write(data);
        res.end();
    }else{
        res.end("File not Found");
    }});
});

server.listen(500);