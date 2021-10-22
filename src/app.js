import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// CUIDADO: ☢️ DAQUI PRA BAIXO É TUDO MOCK ☢️
const MOCK_PRODUCTS = [
  {
    id: '0',
    name: 'Arroz 1k marca X',
    price: 5.7,
  },
  {
    id: '1',
    name: 'Feijão 1k marca Y',
    price: 10.7,
  },
  {
    id: '2',
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

function createProduct(product) {
  const newProduct = {
    id: MOCK_PRODUCTS.length.toString(),
    ...product,
  };
  MOCK_PRODUCTS.push(newProduct);

  return newProduct;
}
// CUIDADO: ☢️ DAQUI PRA CIMA É TUDO MOCK ☢️

app.get('/products', (req, res) => {
  const products = listAllProducts();

  // Status 200: OK Success
  return res.status(200).json(products);
});

// /routeEntity/:routeParam
app.get('/products/:id', (req, res) => {
  const product = findProductById(req.params.id);
  return res.status(200).json(product);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (price < 0) {
    // Status 400: Bad request
    return res.status(400).json({
      success: false,
      error: 'Product price cannot be a negative value',
    });
  }
  const newProduct = createProduct({ name, price });

  // Status 201: Created
  return res.status(201).json(newProduct);
});

app.put('/products', (req, res) => res.json({ success: true }));
app.delete('/products', (req, res) => res.json({ success: true }));

export default app;
