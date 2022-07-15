const ds = require('dandi-api')

let handler = async (m, { conn }) => {
  ds.Facebook('https://www.facebook.com/alghani.alghani.186/videos/1795952904076428/?flite=scwspnss&mibextid=qNDAcmnYe3ARbjkJ').then(r => { 
    let me = conn.user.name
    let vid = r.data[0].url
    conn.sendFile(m.chat, vid, 'vid.mp4', `${me} Facebook downloader`, m)
  })
}

handler.help = ['fb', 'fbdl', 'facebook']
handler.tags = ['downloader']
handler.command = /^(fb|fbdl|facebook)$/i
handler.limit = false
module.exports = handler
