const amqp = require('amqplib')

amqp.connect('amqp://localhost')
    .then(connection => {
        return connection.createChannel().then(async(ch) => {
            const channel_name_1 = 'channel_1'
            const channel_name_2 = 'channel_2'

            const queue_1 = ch.assertQueue(channel_name_1, { durable: false })
            const queue_2 = ch.assertQueue(channel_name_2, { durable: false })

            queue_1.then(chan => {
                return ch.consume(chan.queue, msg => {
                    console.log('[-] Received', msg.content.toString())
                }, {
                    noAck: true
                })
            }).then(() => console.log(`[*] Waiting for messages from channel ${channel_name_1}. Ctrl+C to exit`))
            queue_2.then(chan => {
                return ch.consume(chan.queue, msg => {
                    console.log('[-] Received', msg.content.toString())
                }, {
                    noAck: true
                })
            }).then(() => console.log(`[*] Waiting for messages from channel ${channel_name_2}. Ctrl+C to exit`))
        })
    }).catch(console.warn)