import { Router } from 'express';
import ProductsController from './app/controllers/ProductsController';
import UsersController from './app/controllers/UsersController';
import logger from './app/middlewares/logger';
import auth from './app/middlewares/auth';

const routes = new Router();

routes.use(logger);

routes.post('/users', UsersController.store);
routes.post('/signIn', UsersController.signIn);

routes.use(auth);

routes.get('/products', ProductsController.index);
routes.get('/products/:id', ProductsController.find);
routes.post('/products', ProductsController.create);
routes.put('/products/:id', ProductsController.update);
routes.delete('/products/:id', ProductsController.delete);

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.find);

export default routes;
