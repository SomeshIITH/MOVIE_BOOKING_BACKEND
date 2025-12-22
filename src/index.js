import express from 'express';
import bodyParser from 'body-parser';

import {PORT} from './config/server-config.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import apiRoutes from './routers/index.js';
app.use('/api',apiRoutes);

import {connect} from './config/database-config.js';

const StartServer = async ()=>{
    app.listen(PORT,async ()=>{
        console.log(`server is running in http://localhost:${PORT}`);
        
        console.log('connecting to database');
        await connect();
        console.log('connected to database');
    })
};

StartServer();



