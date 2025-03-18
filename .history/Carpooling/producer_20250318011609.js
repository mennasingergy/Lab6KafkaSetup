const { Kafka } = require('kafkajs');

// Create Kafka client instance
const kafka = new Kafka({
    clientId: 'carpooling-app',
    brokers: ['localhost:9092'], // Kafka broker address
});

// Create the producer
const producer = kafka.producer();

// Function to simulate sending user request event
const produceUserRequest = async (userRequest) => {
    await producer.connect();
    console.log('Producer connected');

    // Send a message to Kafka topic "user-requests"
    await producer.send({
        topic: 'user-requests',
        messages: [
            { value: JSON.stringify(userRequest) }  // Sending user request details
        ],
    });

    console.log('User request sent:', userRequest);
    await producer.disconnect();
};

// Example user request
const userRequest = {
    userId: 1,
    userName: 'Menna',
    origin: 'Tagamo3',
    destination: 'masr el gedida',
    requestedAt: new Date().toISOString(),
};

// Produce the user request
produceUserRequest(userRequest).catch(console.error);
