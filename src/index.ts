import serveless from 'serverless-http';
import express, { Request, Response  } from 'express';
import dotenv from 'dotenv';

import productRouter from './routes/product.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to API!!')
});

app.use('/products', productRouter)


export const handler = serveless(app);