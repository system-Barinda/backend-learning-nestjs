const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {

    if(req.method === 'Get' && req.url === '/'){
        fs.readFile('input.html', (err,data) => {
            if(err){
                res.writeHead(404, {'content-type':'Text/html'})
                return res.end("error reading file");
            }
            res.writeHead(200, {'content-type':'text/html'});
             res.end(data);

        })
    }
});