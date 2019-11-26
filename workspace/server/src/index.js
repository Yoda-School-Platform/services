require('dotenv').config();

const { argv } = require('yargs');
const express = require('express');
const pino = require('express-pino-logger')();

const api = require('./api');

const config = {
    port: argv.port || process.env.PORT || 8080,
    host: argv.host || process.env.HOST || '0.0.0.0'
};

const app = express();
if (!(argv.silent || argv.quiet)) {
    app.use(pino);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.listen({
    port: config.port,
    host: config.host
});