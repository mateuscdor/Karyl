let handler = async (m, { conn }) => {
  let d = new Date(new Date + 3600000)
  let locale = 'id'
  // d.getTimeZoneOffset()
  // Offset -420 is 18.00
  // Offset    0 is  0.00
  // Offset  420 is  7.00
  let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
  let week = d.toLocaleDateString(locale, { weekday: 'long' })
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(d)
  let time = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
  let msg = m.quoted.text
  if (m.sender == '6282245409072@s.whatsapp.net') {
    let txt = `
*STATUS PESANAN :*

STATUS        :   PESANAN SEDANG DI PROSES🙏
TANGGAL    :   ${date}
WAKTU         :   ${time}
ID                    :   ${msg}
`.trim()
     m.reply(txt)
  } else throw false
}

handler.customPrefix = /hxcbdw/
handler.command = new RegExp
handler.disabled = false
module.exports = handler
