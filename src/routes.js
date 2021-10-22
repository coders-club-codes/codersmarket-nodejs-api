import { Router } from 'express';
import ProductsController from './app/controllers/ProductsController';
import UsersController from './app/controllers/UsersController';

const routes = new Router();

routes.get('/products', ProductsController.index);
routes.get('/products/:id', ProductsController.find);
routes.post('/products', ProductsController.create);
routes.put('/products', ProductsController.update);
routes.delete('/products', ProductsController.delete);

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.find);

export default routes;
