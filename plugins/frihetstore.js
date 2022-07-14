const moment = require('moment-timezone')
let handler = async (m, { conn }) => {
  let name = await conn.getName(m.sender)
  let judul = `${global.ucapan}, ${name}`.trim()
      const sections = [
      {
        title: 'Tap untuk melihat daftar',
        rows: [
          { title: 'Diamond ML', rowId: `.fsml` },
          { title: 'Diamond Free Fire', rowId: `.fsff` },
          { title: 'Chip HDI', rowId: `.fshdi` }, mo
        ]
      }
    ]
    const listMessage = {
      text: judul,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
}

handler.command = /^(fs|frihetstore)$/i

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