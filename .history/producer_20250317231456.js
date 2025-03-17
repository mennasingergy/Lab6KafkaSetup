const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'Mena',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

const sendMessage = async () => {
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: 'Hello Kafka from Node.js' }],
  });
  await producer.disconnect();
};

sendMessage().catch(console.error);
