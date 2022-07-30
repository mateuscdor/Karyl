let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let url = json.result.link_dl1 || json.result.link_dl2 || ''
  if (!url) throw 'Gagal mengambil url download'
    await conn.sendFile(m.chat, url, 'tiktok.mp4', ${conn.user.name} tiktok downloader, m)
}
handler.help = ['tiktok', 'tik', 'tt']
handler.tags = ['downloader']
handler.command = /^(tt|tik|tiktok)$/i
module.exports = handler
