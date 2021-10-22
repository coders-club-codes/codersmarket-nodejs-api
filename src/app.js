import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/products', (req, res) => res.json({ success: true }));
app.post('/products', (req, res) => res.json({ success: true }));
app.put('/products', (req, res) => res.json({ success: true }));
app.delete('/products', (req, res) => res.json({ success: true }));

export default app;
