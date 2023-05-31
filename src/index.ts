import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`server running in ${port}`)
});