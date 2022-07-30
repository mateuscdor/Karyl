const ds = require('dandi-api')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	if (!args[0]) throw `Link tiktoknya mana`
        else m.reply('Proses')
  ds.Tiktok(args[0]).then(r => {
    let me = conn.user.name
    let url = r.no_wm
    if (url) await conn.sendFile(m.chat, url, 'tiktok.mp4', `${me} Tiktok Downloader`, m)
      else throw `Link download tidak ditemukan ಥ_ಥ\n\nSilahkan coba gunakan ${usedPrefix + command}2 untuk mencoba server lain`
    })
}
handler.help = ['tiktok', 'tik', 'tt']
handler.tags = ['downloader']
handler.command = /^(tt|tik|tiktok)$/i
module.exports = handler
