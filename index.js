const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from CI/CD demo!for DEVOPS by Hariharan k hiiiiii</h1><p>Deployed at: ' + new Date().toISOString() + '</p>');
});

app.listen(port, () => console.log(`Listening on ${port}`));
