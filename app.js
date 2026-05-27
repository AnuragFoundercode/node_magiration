const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Running');
});

app.post('/login', (req, res) => {

  const { email, password } = req.body;

  if (
    email === 'admin@test.com' &&
    password === '123456'
  ) {

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'abc123'
    });

  }

  return res.status(401).json({
    success: false,
    message: 'Invalid credentials'
  });

});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = app;