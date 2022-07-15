let handler = async (m, { conn }) => {
  let user = global.db.data.users['6282245409072@s.whatsapp.net']
  if (!user) return
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
  let q = this.serializeM(await m.getQuotedObj())
  if (!q.quoted) return
  let txt = `
*STATUS PESANAN :*

STATUS        :   PESANAN SEDANG DI PROSES🙏
TANGGAL    :   ${date}
WAKTU         :   ${time}
ID                    :   ${q}
`.trim()
  if (user) m.reply(txt)
}

handler.customPrefix = /p/
handler.command = new RegExp
module.exports = handler