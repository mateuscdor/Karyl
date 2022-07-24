let handler = m => m

handler.all = async function (m) {
  if (m.sender == '6282245409072@s.whatsapp.net' || m.sender == '62895622473820@s.whatsapp.net') {
  if (m.text.startsWith('chip')) {
  let name = await conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
  let judul = `⬣──────「 *MENU* 」─────⬣
┌──⭓ 「 *Info Bot* 」
│⬡ Kecepatan Respon 0.0009 _Second_
│⬡ Aktif selama 1 day, 9 hours, 53 minutes, 7 seconds
│⬡ *1372* Pengguna Percaya Kami
│⬡ Mode : publik
│⬡ Total Order Chip : *2560* pesanan
│⬡ Total Order Chip Hari ini : *130* pesanan
└──⭓
Selamat Datang *${name}* Di Toko Kami 

Chip Kami Ready Silahkan Di Order,Jangan Langsung Transfer, silahkan lakukan Order dahulu sampai keluar pembayaran lalu transfer sesuai intruksi, *clik tombol bawa untuk Order* Jika tidak keluar tombol order silahkan Ketik *ORDER*`.trim()
  const sections = [
  {
    title: 'LIST MENU FAZRI STORE',
    rows: [ { 
        title: 'ORDER CHIPS',
        description: 'Pembelian Chips',
        rowId: '.fazriharga'
    }, {
        title: 'CEK ADMIN',
        description: 'Cek Admin Online',
        rowId: '.admin'
    }, { 
        title: 'KONTAK',
        description: 'Cek akun asli kami',
        rowId: '.owner'
    }, ]
    } ]
  const listMessage = {
      text: judul,
      footer: "Fazri",
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Menu",
      sections
    }
  if (!m.fromMe) {
    return this.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
  }
  }
  }
}


module.exports = handler
