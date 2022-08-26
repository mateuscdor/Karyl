let moment = require('moment-timezone')
let handler = async (m, { conn, text }) => {
  let [ a, b, c ] = text.split`|`
  let id = a
  if (!a.startsWith('6')) throw `Masukkan nomor sesuai format!\n\nContoh: 6282xxxxxxxxx`
  if (!b) b = ''
  if (!c) throw `Harap input sesuai format! Contoh: ${usedPrefix + command} 6282xxxxxxxxx|Seseorang|Aku sayang kamu`
  let format = `${ucapan}! Kamu dapat pesan nih!
Dari: ${b}
Pesan: ${c}

Jika kamu menerima pesan tidak pantas, bersifat mengancam, merasa terganggu, silahkan lapor ke owner di https://wa.me/6282245409072! Owner akan membantu anda dengan senang hati!`.trim()
  conn.reply(id + '@s.whatsapp.net', format, '')
}
handler.command = /^(menfes)$/i
module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}

