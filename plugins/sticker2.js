const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Foto/Video tidak ditemukan'
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) await conn.sendMessage(m.chat, { sticker: stiker }, {
      quoted: m,
      mimetype: 'image/webp'
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
handler.disabled = true

module.exports = handler
