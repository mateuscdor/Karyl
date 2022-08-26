let moment = require('moment-timezone')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let [ h, i, j ] = text.split`|`
  let id = h
  if (!h.startsWith('6')) throw `Masukkan nomor sesuai format!\n\nContoh: 6282xxxxxxxxx`
  if (!i) i = ''
  if (!j) throw `Harap input sesuai format! Contoh: ${usedPrefix + command} 6282xxxxxxxxx|Seseorang|Aku sayang kamu`
  let format = `${global.ucapan}! Kamu dapat pesan nih!
Dari: ${i}
Pesan: ${j}\n\n` + readMore +`Jika kamu menerima pesan tidak pantas, bersifat mengancam, merasa terganggu, dll, silahkan lapor ke owner di https://wa.me/6282245409072! Owner akan membantu anda dengan senang hati!\n*Feature ID: 5967*`
  let sd = m.sender  
  conn.reply(id + '@s.whatsapp.net', format, '')
  conn.reply(m.chat, `Pesanmu sukses dikirim!\n\nNote: *Kamu tidak akan menerima pesan balasan, karena fitur ini hanya dibuat untuk menyampaikan sesuatu secara rahasia!*`, m)
  conn.reply('6282245409072@s.whatsapp.net', `
${sd} Mengirim pesan kepada wa.me/${h}
Dari: ${i}
Pesan: ${j}
`.trim(), '')
}
handler.command = /^(menfes)$/i
handler.private = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

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

