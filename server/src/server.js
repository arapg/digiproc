const express = require('express');
const { productRoute } = require('./routes/productRoute');

const server = express();

server.use(express.json());
server.use('/products', productRoute);

server.listen(5050);
console.log('Server is running at http://localhost:5050/');