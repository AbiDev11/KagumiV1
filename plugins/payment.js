let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/c9b9bb4d678ce5611a8a6.jpg'
let dann =
`
Scan diatas untuk memproses pembelian anda
`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler