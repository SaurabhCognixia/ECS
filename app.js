const http = require('http');

const PORT = process.env.PORT || 80;
const VERSION = 'v5.0';

const server = http.createServer((req, res) => {
  const now = new Date().toISOString();

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    status: 'healthy',
    version: VERSION,
    color: 'blue',
    timestamp: now,
    hostname: process.env.HOSTNAME || 'local'
  }));
});

server.listen(PORT, () => {
  console.log(`Blue service ${VERSION} running on port ${PORT}`);
});
