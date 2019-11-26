function mapErrorCodeToMessage(errorCode) {
    const map = {
        001: {
            msg: 'No response object received',
            level: 'fatal'
        }
    };

    return map[errorCode];
}

module.exports = {
    mapErrorCodeToMessage
};
