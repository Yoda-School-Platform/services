const { Router } = require('express');
const Chance = require('chance');

const { mapErrorCodeToMessage: errorCode } = require('./utils');

const seed = 123456;
const chance = new Chance(seed);
const api = new Router();

function error(res, error) {
    res.send({ error: error});
}

api.post('/login', (req, res) => {
    if (!req.body) {
        error(res, errorCode(001));
        return;
    }

    res.send({
        data: {
            token: chance.hash({ length: 24 })
        }
    });
});

api.post('/register', (req, res) => {
    if (!req.body) {
        error(res, errorCode(001));
        return;
    }

    res.send({
        data: 'success'
    })
});

module.exports = api;
