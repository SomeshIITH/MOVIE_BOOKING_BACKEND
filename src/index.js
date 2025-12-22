import express from 'express';
import bodyParser from 'body-parser';

import {PORT} from './config/server-config.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import apiRoutes from './routers/index.js';
app.use('/api',apiRoutes);

const StartServer = ()=>{
    app.listen(PORT,()=>{
        console.log(`server is running in http://localhost:${PORT}`);
    })
};

StartServer();



