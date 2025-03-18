const { run } = require('./consumer');
const { sendMessage } = require('./producer');

run().catch(console.error);
