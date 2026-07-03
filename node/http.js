// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'content-type':'text/plain'});
//     res.end('hello world');
// })
// const PORT = 3000;
// server.listen(PORT, 'localhost', () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });


const http = require('http');

const server = http.createServer((req, res) => {
// Log all request headers
  console.log('Request Headers:', req.headers);

  // Get specific headers (case-insensitive)
  const userAgent = req.headers['user-agent'];
  const acceptLanguage = req.headers['accept-language'];

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}`);
});

server.listen(3000);