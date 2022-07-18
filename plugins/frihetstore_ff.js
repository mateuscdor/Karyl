let handler = async (m, { conn }) => {
  let teks = `*_PriceList Diamond FreeFire_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰
    
5       💎 = Rp. 1.000
20     💎 = Rp. 3.000
50     💎 = Rp. 6.600
70     💎 = Rp. 9.000
100   💎 = Rp. 13.200
140   💎 = Rp. 18.000
210   💎 = Rp. 27.000
355   💎 = Rp. 45.000
720   💎 = Rp. 90.000
2000 💎 = Rp. 245.000
7290 💎 = Rp. 900.000
🗿   MM = Rp. 27.300
🦏   MB  = Rp. 82.000

⏳ *_PROSES 1-10 MENIT_*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*`.trim()
  m.reply(teks)
}

handler.command = /^(fsff)$/i

module.exports = handler
