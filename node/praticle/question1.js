const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {

    if(req.method === 'Get' && req.url === '/'){
        fs.readFile('input.html','utf8', (err,data) => {
            if(err){
                res.writeHead(404, {'content-type':'text/plain'})
                return res.end("error reading file");
            }
            res.writeHead(200, {'content-type':'text/plain'});
             res.end(data);

        })
    }


    if(req.method === 'POST' && req.url === '/add'){

         let body = "";

         req.on('data', (chunk) => {
            body += chunk.toString();
         })
         req.end(() => {
            fs.writeFile('output.txt', body, (err) => {
                if(error){
                    res.writeHead(500, {'Content-type':'text/plain'});

                     return res.end("error writing to file");
                }
               res.writeHead(200, {'content-type':'text/plain'});

               return res.end("data received and written to file");

            })
           
    
            
         })

      
    }
    else{
        req.writeHead(405, {'Content-type':'text/plain'});
        return res.end("method not allowed");
    }
});

server.listen(3000, () => {
    console.log("server is running on port 3000");
})