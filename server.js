const express = require('express');

const server = express();

const dishesRouter = require('./data/routers/dishes-router');

server.use(express.json());

server.use('/api/dishes', dishesRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;
