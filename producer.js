const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'MennaService',
    brokers: ['localhost:9092']
});

const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
}
);

const sendMessage = async () => {
    await producer.connect();
    await producer.send({
        topic: 'test-topic',
        messages: [{ value: 'Bismillah' }],
    });
    await producer.disconnect();
};

sendMessage().catch(console.error);
