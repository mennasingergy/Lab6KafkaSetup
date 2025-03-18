const { Kafka } = require('kafkajs');

// Create Kafka client instance
const kafka = new Kafka({
    clientId: 'carpooling-app',
    brokers: ['localhost:9092'],
});

// Create the consumer
const consumer = kafka.consumer({ groupId: 'carpooling-group' });

// Function to listen for and process user requests
const consumeUserRequests = async () => {
    await consumer.connect();
    console.log('Consumer connected');

    // Subscribe to the "user-requests" topic
    await consumer.subscribe({ topic: 'user-requests', fromBeginning: true });

    // Process each message
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const userRequest = JSON.parse(message.value.toString());
            console.log(`Received user request: ${JSON.stringify(userRequest)}`);

            // Here, we could trigger a process like finding drivers or notifying others
            // For example: finding available drivers
            // simulateDriverSearch(userRequest);
        },
    });
};

// Start consuming user requests
consumeUserRequests().catch(console.error);

modeule.exports = { consumeUserRequests };
