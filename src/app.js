import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import './database';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use(routes);

export default app;
