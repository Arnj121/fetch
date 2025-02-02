const express = require("express");
require('dotenv').config()
const path=require('path')
const processor = require('./processor.js')
const dns = require('node:dns')
const os = require('node:os')

const server = express()

server.use(express.json())

server.post('/receipts/process',processor.addReceipt)
server.get('/receipts/:id/points',processor.getReceiptPoints)
server.get('/receipts/:id',processor.getReceiptDetails)
server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'README.md'))
})


// server.listen(process.env.PORT,()=>{
//         console.log(`Listening on http://localhost:${process.env.PORT}`)
//     })


dns.lookup(os.hostname(),{'family':4},(err,addr)=>{
    server.listen(process.env.PORT,addr,()=>{
        console.log(`Listening on http://${addr}:${process.env.PORT}`)
    })
})
