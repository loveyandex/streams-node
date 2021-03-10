
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        });

        setInterval(() => {
        let  msg = 'Hello World!'+Date.now();
        let bool=channel.sendToQueue(queue, Buffer.from(msg));
            if ( bool)
            console.log(" [x] Sent %s", msg);

        }, 300
        );

    });

});