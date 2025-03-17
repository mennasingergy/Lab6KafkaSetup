const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'MennaService',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

const sendMessage = async () => {
  await producer.connect();
  await producer.send({
    topic: 'First Topic',
    messages: [{ value: 'Hello Kafka from Node.js' }],
  });
  await producer.disconnect();
};

sendMessage().catch(console.error);
