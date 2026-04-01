import express from 'express';
import { router } from './routes/routes';

export const app = express();

app.use(router);