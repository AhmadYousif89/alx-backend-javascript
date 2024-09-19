const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.status(200).send({
    payment_methods: { credit_cards: true, paypal: false },
  });
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  if (!username) {
    return res.status(400).send('username is missing');
  }
  res.status(200).send('Welcome ' + username);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
