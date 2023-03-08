const fs=require('fs');

const requestHandler=(req,res)=>{
    let url=req.url;
    let method=req.method
    if(url==='/'){
        const data=fs.readFileSync('message.txt',{encoding:'utf8'})
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body><span>${data}</span><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>`)
        res.write('</html>')
        return res.end()
    }
    if(url==='/message'&& method==='POST' ){
        const body=[];
        req.on('data',(chunk)=>{
           body.push(chunk);
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><h1>Welcome to Node js project</h1></body>')
        res.write('</html>')
        res.end();
}

// module.exports=requestHandler;
//module.exports={
    //handler:requestHandler
//}
exports.handler=requestHandler;
