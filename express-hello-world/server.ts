import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('Log method property', req.method);
  res.send('Sent a string');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
