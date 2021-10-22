import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import ProductsController from './app/controllers/ProductsController';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/products', ProductsController.index);
app.get('/products/:id', ProductsController.find);
app.post('/products', ProductsController.create);
app.put('/products', ProductsController.update);
app.delete('/products', ProductsController.delete);

export default app;
