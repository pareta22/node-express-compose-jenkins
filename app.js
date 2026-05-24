const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Node Jenkins Demo</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 80px;">
        <h1>Hello Sachin Pareta how are you NCS!</h1>
        <h2>This Node.js app is deployed by Jenkins + Docker Compose</h2>
        <p>Version: 1.0</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    app: 'node-express-compose-jenkins'
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
