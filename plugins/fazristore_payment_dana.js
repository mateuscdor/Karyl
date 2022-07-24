let handler = async (m, { conn }} => {
  conn.reply(m.chat, `
  Dana
0895622473820
A/N 
Nini ******
`.trim(), m)
}

handler.command = /^(fazridana)$/i

module.exports = handler