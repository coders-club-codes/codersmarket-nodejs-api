import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

const port = process.env.NODE_PORT;

app.listen(port, () => console.info(`🚀 Server running on port ${port}...`));
