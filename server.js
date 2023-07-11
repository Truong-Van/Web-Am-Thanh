const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const products = [
    { id: 1, name: 'Sản phẩm 1' },
    { id: 2, name: 'Sản phẩm 2' },
    { id: 3, name: 'Sản phẩm 3' },
    { id: 4, name: 'Sản phẩm 4' },
    { id: 5, name: 'Sản phẩm 5' },
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

const port = 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
