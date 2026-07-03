// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'content-type':'text/plain'});
//     res.end('hello world');
// })
// const PORT = 3000;
// server.listen(PORT, 'localhost', () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });


// const http = require('http');

// const server = http.createServer((req, res) => {
// // Log all request headers
//   console.log('Request Headers:', req.headers);

//   // Get specific headers (case-insensitive)
//   const userAgent = req.headers['user-agent'];
//   const acceptLanguage = req.headers['accept-language'];

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}`);
// });

// server.listen(3000);



const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);

  // Get different parts of the URL
  const pathname = parsedUrl.pathname; // The path without query string
  const query = parsedUrl.query; // The query string as an object

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    pathname,
    query,
    fullUrl: req.url
  }, null, 2));
});

server.listen(3000);