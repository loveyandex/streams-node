const WebSocket = require('ws');
const Binance = require('binance-api-node').default
// Authenticated client, can make signed calls
const client = Binance({
    apiKey: 'V4sYGw6uLJmaF3dgovhSzFS2bRbsIB7RUGNvZMl1VBHdXu9z6apDoZZyoEOlqHzl',
    apiSecret: 'TcNyjc8NUXKBvo9cD2rfZbwfVhiP9dNOa0iv3HeKJBhOEaUDxdHQ09ljWiNDgxmc',
})


const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {


    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });


    client.ws.aggTrades(['BTCUSDT'], trade => {
        // console.log(trade);
        ws.send(JSON.stringify(trade));

    })

});
