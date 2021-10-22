import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// CUIDADO: ☢️ DAQUI PRA BAIXO É TUDO MOCK ☢️
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Arroz 1k marca X',
    price: 5.7,
  },
  {
    id: '2',
    name: 'Feijão 1k marca Y',
    price: 10.7,
  },
  {
    id: '3',
    name: 'Danoninho 12 unidades',
    price: 15,
  },
];

function listAllProducts() {
  return MOCK_PRODUCTS;
}

function findProductById(id) {
  const product = MOCK_PRODUCTS.find(product => product.id === id);
  return product;
}
// CUIDADO: ☢️ DAQUI PRA CIMA É TUDO MOCK ☢️

app.get('/products', (req, res) => {
  const products = listAllProducts();
  return res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = findProductById(req.params.id);
  return res.json(product);
});

app.post('/products', (req, res) => res.json({ success: true }));
app.put('/products', (req, res) => res.json({ success: true }));
app.delete('/products', (req, res) => res.json({ success: true }));

export default app;
