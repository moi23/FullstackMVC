const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
    res.send("Wellcome to Backend-API")
})

server.listen(3000, () => {
  console.log("Api Onlyne bro :D")   
})