const express = require('express')
const Binance = require('binance-api-node').default
// Authenticated client, can make signed calls
const client = Binance({
    apiKey: 'V4sYGw6uLJmaF3dgovhSzFS2bRbsIB7RUGNvZMl1VBHdXu9z6apDoZZyoEOlqHzl',
    apiSecret: 'TcNyjc8NUXKBvo9cD2rfZbwfVhiP9dNOa0iv3HeKJBhOEaUDxdHQ09ljWiNDgxmc',
  })
  
// const clean = client.ws.depth('ETHBTC', depth => {
//     console.log(depth)
//   })
//   client.ws.candles('BTCUSDT', '1m', candle => {
//     console.log(candle)
//   })
var c=0;
  // client.ws.trades(['BTCUSDT'], trade => {
  //   console.log(c++)
  // })
  client.ws.aggTrades(['BTCUSDT'], trade => {
    console.log(c++)
  })

client.ws.futuresUser(msg => {
    console.log(msg)
    
  })


  client.ws.marginUser()
  .then((res)=>{console.log(JSON.stringify(res))})
  .catch((res)=>{console.log("error "+JSON.stringify(res))})



const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log( client.ping())
    // client.exchangeInfo().then(exchangeInfo =>  res.send(exchangeInfo))
    client.book({ symbol: 'ETHBTC' }).then(obj =>  res.send(obj))

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})