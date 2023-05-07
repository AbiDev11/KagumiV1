let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/c9b9bb4d678ce5611a8a6.jpg'
let dann =
`
Thanks for Donationing!

`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler