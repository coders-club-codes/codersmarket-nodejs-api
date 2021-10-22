import express from 'express';
import 'dotenv/config';

const app = express();

const port = process.env.NODE_PORT;

app.listen(port, () => console.info(`🚀 Server running on port ${port}...`));
