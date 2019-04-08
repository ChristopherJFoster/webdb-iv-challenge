const express = require('express');

const server = express();

const dishesRouter = require('./data/routers/dishes-router');
const recipesRouter = require('./data/routers/recipes-router');

server.use(express.json());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;
