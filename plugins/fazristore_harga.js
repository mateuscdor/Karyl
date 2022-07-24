let handler = async (m, { conn }) => {
  let judul = `
⬣─────「 *ORDER CHIP* 」────⬣
┌────「 *Info Bot* 」───⬣
│⬡ Aktif selama 1 day, 9 hours, 53 minutes, 26 seconds
│⬡ 1372 Pengguna Percaya Kami
│⬡ Mode : publik
│⬡ Total Order Chip : *69395* pesanan
│⬡ Total Order Chip Hari ini : *455* pesanan
╰──────⬣
Silahkan Clik Tombol Di bawa Untuk Order! 

jangan langsung Transfer jika kalian blum memilih Pembayaran, jika langsung tf dan Pembayaran tidak sesuai yg kami sediakan saat ini maka kami anggap hangus
`.trim()
  const sections = [
  {
    "title": "LIST CHIP FAZRI STORE",
    "rows": [{
      "title": "100M",
      "description": "Rp. 6.500",
      "rowId": ".fazripay"
    }, {
      "title": "200M",
      "description": "Rp. 12.850",
      "rowId": ".fazripay"
    }, {
      "title": "300M",
      "description": "Rp. 19.500",
      "rowId": ".fazripay"
    }, {
      "title": "400M", 
      "description": "Rp. 25.600",
      "rowId": ".fazripay"
    }, {
      "title": "500M",
      "description": "Rp. 32.100",
      "rowId": ".fazripay"
    }, {
      "title": "600M",
      "description": "Rp. 38.500",
      "rowId": ".fazripay"
    }, {
      "title": "700M",
      "description": "Rp. 44.900",
      "rowId": ".fazripay"
    }, {
      "title": "800M",
      "description": "Rp. 51.500",
      "rowId": ".fazripay"
    }, {
      "title": "900M",
      "description": "Rp. 57.800",
      "rowId": ".fazripay"
    }, {
      "title": "1B",
      "description": "Rp. 61.000",
      "rowId": ".fazripay"
    }],
    "title": "LIST CHIP FAZRI STORE"
    }]
  const listMessage = {
      text: judul,
      footer: "Fazri",
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "orderdisini",
      sections
    }
  if (!m.fromMe) {
    return this.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
  }
} 

handler.command = /^(fazriharga)$/i

module.exports = handler
