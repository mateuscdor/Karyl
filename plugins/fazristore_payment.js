let handler = async (m, { conn }) => {
  let judul = `
⬣─────「 *PEMBAYARAN* 」────⬣
Silahkan Clik Tombol Di bawa Untuk Melakukan Pembayaran! 

jangan langsung Transfer jika kalian blum memilih Pembayaran, jika langsung tf dan Pembayaran tidak sesuai yg kami sediakan saat ini maka kami anggap angus 

*Pembayaran Yang Kami Sediakan*
⭔ DANA
`.trim()
  const sections = [{
    title: 'Pembayaran',
    rows: [{
      title: 'Dana',
      rowId: '.fazridana'
    }],
      title: 'Pembayaran'
    }]
  const listMessage = {
      text: judul,
      footer: "Fazri",
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "BAYAR Disini",
      sections
    }
  if (!m.fromMe) {
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
  }
}

handler.command = /^(fazripay)$/i

module.exports = handler
