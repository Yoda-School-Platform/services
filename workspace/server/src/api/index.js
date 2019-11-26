const { Router } = require('express');
const Chance = require('chance');

const { mapErrorCodeToMessage: errorCode } = require('./utils');

const seed = 123456;
const chance = new Chance(seed);
const api = new Router();

function error(res, error) {
    res.send({ error: error});
}

// token: registration token for cloud messaging
function isLoginValid({ username, password, token }) {
    return username && password && token;
}

api.post('/login', (req, res) => {
    if (!req.body) {
        error(res, errorCode(001));
        return;
    }

    if (!isLoginValid(req.body)) {
        error(res, errorCode(002));
        return;
    }

    res.send({
        data: {
            token: chance.hash({ length: 24 }),
            expiryDate: new Date(2025, 01, 01).getTime()
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
    });
});

module.exports = api;
