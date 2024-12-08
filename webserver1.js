const http=require('http');

appendFile.use(function(req,res,next){
    res.statusCode(200).send('<hi> hi</hi>');
});

server.listen(500);