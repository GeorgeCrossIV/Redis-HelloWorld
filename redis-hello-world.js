const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
    console.log('Connected to Redis...');
});

client.on('error', (err) => {
    console.log('Redis error:', err);
});

client.set('hello', 'world', (err, reply) => {
    if (err) {
        console.error('Error setting key:', err);
        return;
    }
    console.log('Set:', reply);

    client.get('hello', (err, value) => {
        if (err) {
            console.error('Error getting key:', err);
            return;
        }
        console.log('Hello:', value);

        // Ensure we close the client after all operations are done
        client.quit();
    });
});
