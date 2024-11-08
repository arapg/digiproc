// const express = require('express');
// const { productRoute } = require('./routes/productRoute');

// const server = express();

// server.use(express.json());
// server.use('/products', productRoute);

// server.listen(5050);
// console.log('Server is running at http://localhost:5050/');

import express from 'express';
import { productRoute } from './routes/productRoute';

const server = express();

server.use(express.json());
server.use('/products', productRoute);

server.listen(5050, () => {
    console.log('Server is running on port 5050, http://localhost:5050/');
});