const { consumeUserRequests } = require('./server');
consumeUserRequests().catch(console.error);