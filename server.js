import config from './config';
import express from 'express';
// import fs from 'fs';
import apiRouter from './api';


const server = express();

// server.get('/', (req, res) => {
//     res.send('Hello from express!');
// });

// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });
server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port: ' + config.port)
});