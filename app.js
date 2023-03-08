const http = require("http");

const server=http.createServer((req,res)=>{
    let url=req.url;
    if(url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        return res.end()
    }
    if(url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
        return res.end();
    }
    if(url==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<body><h1>Welcome to Node js project</h1></body>')
        res.write('</html>')
        return res.end();
    }
})
server.listen(4000)
