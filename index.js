const http = require('http');

const PORT = process.env.SERVER_PORT || 8080;
const HOST = process.env.SERVER_HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World, Test 1</h1>');
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
