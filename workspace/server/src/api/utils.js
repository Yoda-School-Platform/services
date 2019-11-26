function mapErrorCodeToMessage(errorCode) {
    const map = {
        001: {
            msg: 'No request object received',
            level: 'fatal'
        },
        002: {
            msg: 'Invalid request object received',
            level: 'fatal'
        }
    };

    return map[errorCode];
}

module.exports = {
    mapErrorCodeToMessage
};
