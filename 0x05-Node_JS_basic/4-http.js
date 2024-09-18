const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';
  res.setHeader('Content-Length', responseText.length);
  res.setHeader('Content-Type', 'text/plain');
  res.write(Buffer.from(responseText));
  res.statusCode = 200;
});

app.listen(1245);

module.exports = app;
