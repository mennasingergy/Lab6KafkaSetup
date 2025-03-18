const { run } = require('./consumer');
const { sendMessage } = require('./producer');

run().catch(console.error);
//sendMessage().catch(console.error);