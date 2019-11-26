const axios = require('axios').default;

const config = {
    baseURL: 'http://localhost:8080/api'
};

const userData = {
    user: 'user1234',
    pass: 'pass'
};

async function main() {
    try {
        const response = await axios.post('/login', userData, config);
        console.log(response.data);    
    } catch (e) {
        console.error(e)
    }
}

main();
