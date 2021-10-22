import { Router } from 'express';
import ProductsController from './app/controllers/ProductsController';

const routes = new Router();

routes.get('/products', ProductsController.index);
routes.get('/products/:id', ProductsController.find);
routes.post('/products', ProductsController.create);
routes.put('/products', ProductsController.update);
routes.delete('/products', ProductsController.delete);

export default routes;
