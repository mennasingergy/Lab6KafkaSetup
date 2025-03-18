const { run } = require('./consumer');
const { sendMessage } = require('./producer');

sendMessage().catch(console.error);
run().catch(console.error);
