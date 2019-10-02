const amqp = require('amqplib')

amqp.connect('amqp://localhost').then(connection => {
    return connection.createChannel().then(async (ch) => {
        const channel_name_1 = 'channel_1'
        const channel_name_2 = 'channel_2'

        const queue_1 = ch.assertQueue(channel_name_1, {
            durable: false
        })
        const queue_2 = ch.assertQueue(channel_name_2, {
            durable: false
        })

        await queue_1.then(chan => {
            const message = "Hello world!"
            ch.sendToQueue(chan.queue, Buffer.from(message))
            console.log(" [x] Sent", message);
        })
        await queue_2.then(chan => {
            let json_message = JSON.stringify({
                name: "MuhBayu",
                job: "Back-end Developer",
            })
            ch.sendToQueue(chan.queue, Buffer.from(json_message))
            console.log(" [x] Sent", json_message);
        })
        return ch.close()

    }).finally(() => connection.close())
}).catch(console.warn)