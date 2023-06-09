import express from 'express';
import config from "config"
import connect from './utils/connect';

import logger from './utils/logger';
import routes from './routes';
import { ppid } from 'process';
const port = config.get<number>('port')

const app= express();

app.use(express.json())
app.listen(port, async()=> {
    logger.info("app is running");
    await connect();
});