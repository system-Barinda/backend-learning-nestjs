const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('hello world');
})
const PORT = 3000;
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});